import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'assets-src');
const outputDir = path.join(process.cwd(), 'public', 'images');
const manifestPath = path.join(process.cwd(), 'src', 'content', 'image-manifest.json');
const specPath = path.join(process.cwd(), 'src', 'content', 'image-spec.ts');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir, { recursive: true });
}

// Very basic regex parser to extract spec from image-spec.ts since we can't easily import TS in this simple script
const specContent = fs.readFileSync(specPath, 'utf-8');
const specRegex = /{ id: '([^']+)', ratio: '([^']+)' }/g;
const specList = [];
let match;
while ((match = specRegex.exec(specContent)) !== null) {
  specList.push({ id: match[1], ratio: match[2] });
}

const manifest = {};

async function processImages() {
  console.log('Running image pipeline...');
  const files = fs.existsSync(inputDir) ? fs.readdirSync(inputDir) : [];
  
  for (const spec of specList) {
    const fileMatches = files.filter(f => f.startsWith(spec.id + '.') && !f.endsWith('.d.ts'));
    const inputFile = fileMatches.length > 0 ? path.join(inputDir, fileMatches[0]) : null;

    if (inputFile && fs.existsSync(inputFile)) {
      const [wRatio, hRatio] = spec.ratio.split('/').map(Number);
      
      const widths = [800, 1600];
      
      for (const w of widths) {
        let h = Math.round((w / wRatio) * hRatio);
        // special case for open graph
        if (spec.id === 'og-default' && w === 800) {
           h = Math.round((800 / 1200) * 630);
        }

        const outPath = path.join(outputDir, `${spec.id}-${w}.webp`);
        await sharp(inputFile)
          .rotate() // auto-rotate from EXIF
          .resize(w, h, { fit: 'cover', position: 'center' })
          .webp({ quality: 78 })
          .withMetadata(false) // strip metadata
          .toFile(outPath);
      }
      
      manifest[spec.id] = true;
      console.log(`Processed ${spec.id}`);
    } else {
      manifest[spec.id] = false;
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('Image pipeline complete. Manifest updated.');
}

processImages().catch(err => {
  console.error('Image pipeline failed:', err);
  process.exit(1);
});
