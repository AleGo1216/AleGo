// lib/generateProducts.ts (server-side util)
import { Product } from '../app/types/product';

const sampleArtists = ["Hiro Tanaka","A. Moreau","K. Saito","V. Rossi","Y. Nakamura","L. Chen","M. Adler","S. Kagemori","Various","E. Park"];
const levels = ["Collector","Premium","Cute"];
const statuses = ["In Stock","Pre-order"];
const titles = [
  "Celestial Guardian", "Mechanized Colossus", "Aurora Trio", "Arcane Archivist",
  "Kawaii Scout", "Luna Prototype", "Rune Sentinel", "Atlas Prime", "Mimi Explorer", "Noir Muse"
];

export function generateProducts(count = 50): Product[] {
  const out: Product[] = [];
  for (let i = 1; i <= count; i++) {
    const level = levels[i % 3];
    const status = statuses[i % 2];
    const artist = sampleArtists[i % sampleArtists.length];
    const title = `${titles[i % titles.length]} #${i}`;
    const sku = `AT-${1000 + i}`;
    const price = Math.round((50 + Math.pow(i, 1.15) * 4) % 1300) + (i % 5 === 0 ? 400 : 0);
    const release = Date.now() - (i * 86400000 * (i % 30));
    const imgIndex = ((i - 1) % 12) + 1;
    out.push({
      id: i,
      sku,
      title,
      artist,
      price,
      edition: level,
      availability: status,
      img: `/images/toy${imgIndex}.jpg`,
      fav: false,
      sales: Math.floor(Math.random() * 400 + (i % 7) * 12),
      release
    });
  }
  return out;
}