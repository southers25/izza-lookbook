import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join } from "path";

const SOURCE_DIR = join(process.cwd(), "..", "SHOP SHOOTING");
const OUTPUT_DIR = join(process.cwd(), "public", "images");

const FULL_WIDTH = 1920;
const QUALITY = 80;

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(SOURCE_DIR);
  const jpgs = files.filter((f) => f.endsWith(".jpg") || f.endsWith(".jpeg"));

  console.log(`Processing ${jpgs.length} images...`);

  for (const file of jpgs) {
    const inputPath = join(SOURCE_DIR, file);
    const outputPath = join(OUTPUT_DIR, file);

    try {
      await sharp(inputPath)
        .resize(FULL_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);

      const stats = await sharp(outputPath).metadata();
      console.log(`  ${file} -> ${stats.width}x${stats.height}`);
    } catch (err) {
      console.error(`  ERROR ${file}: ${err.message}`);
    }
  }

  console.log("Done!");
}

main();
