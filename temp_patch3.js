const fs = require('fs');

const heroPath = 'd:\\work\\Frontend\\NextJs Projects\\tiny-project\\src\\app\\components\\HeroSection.tsx';
let heroText = fs.readFileSync(heroPath, 'utf8');

const oldText = `        <div class="relative w-full h-100 md:h-125 lg:h-180">\r\n          <Image\r\n            src=\"/images/image_4.png\"\r\n            alt=\"Hero Image\"\r\n            fill\r\n            className=\"object-contain\"\r\n          />\r\n        </div> `;
const newText = `        <div class="relative w-full h-100 md:h-125 lg:h-180">\r\n          <Image\r\n            src=\"/images/image_4.png\"\r\n            alt=\"Hero Image\"\r\n            fill\r\n            sizes=\"100vw\"\r\n            style={{ width: \"auto\", height: \"auto\" }}\r\n            className=\"object-contain\"\r\n          />\r\n        </div> `;

if (!heroText.includes(oldText)) {
  throw new Error('HeroSection old text not found');
}
heroText = heroText.replace(oldText, newText);
fs.writeFileSync(heroPath, heroText, 'utf8');
console.log('HeroSection patched');
