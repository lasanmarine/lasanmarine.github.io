import sharp from 'sharp';
import fs from 'node:fs/promises';

const src = 'public/favicon-logo.svg';
const raw = await fs.readFile(src, 'utf8');
// inner content of the original svg, re-placed on a square canvas with padding
const inner = raw.slice(raw.indexOf('>', raw.indexOf('<svg')) + 1).replace('</svg>', '');
const W = 372.097,
  H = 138.012;
const pad = 0.08; // 8% padding each side
const side = W / (1 - 2 * pad);
const x = side * pad - 0; // left offset for content
const y = (side - H) / 2;

const square = (
  bg,
) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${side}" height="${side}" viewBox="0 0 ${side} ${side}">
${bg ? `<rect width="${side}" height="${side}" fill="${bg}"/>` : ''}
<g transform="translate(${x}, ${y})">${inner}</g>
</svg>`;

await fs.writeFile(
  '/private/tmp/claude-501/-Users-nguyenquangvinh-Desktop-LasanMarine-lasanmarine-github-io/94e104ce-e73a-4bf3-8bbc-271500be4ed6/scratchpad/square.svg',
  square(null),
);

const render = (svg, size) =>
  sharp(Buffer.from(svg), { density: 600 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

const transparent = square(null);
const white = square('#ffffff');

await fs.writeFile('public/favicon-96x96.png', await render(transparent, 96));
await fs.writeFile('public/favicon-48x48.png', await render(transparent, 48));
await fs.writeFile('public/apple-touch-icon.png', await render(white, 180));

// favicon.ico = ICO container with 16/32/48 PNG entries
const sizes = [16, 32, 48];
const pngs = [];
for (const s of sizes) pngs.push(await render(transparent, s));
const count = pngs.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(count, 4);
let offset = 6 + 16 * count;
const dirs = [];
pngs.forEach((png, i) => {
  const d = Buffer.alloc(16);
  d.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 0);
  d.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 1);
  d.writeUInt8(0, 2);
  d.writeUInt8(0, 3);
  d.writeUInt16LE(1, 4);
  d.writeUInt16LE(32, 6);
  d.writeUInt32LE(png.length, 8);
  d.writeUInt32LE(offset, 12);
  offset += png.length;
  dirs.push(d);
});
await fs.writeFile('public/favicon.ico', Buffer.concat([header, ...dirs, ...pngs]));
console.log('done');
