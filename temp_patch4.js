const fs = require('fs');

const heroPath = 'd:\\work\\Frontend\\NextJs Projects\\tiny-project\\src\\app\\components\\HeroSection.tsx';
let heroText = fs.readFileSync(heroPath, 'utf8');

const heroRegex = /<div className="relative w-full h-100 md:h-125 lg:h-180">[\s\S]*?<Image[\s\S]*?src="\/images\/image_4.png"[\s\S]*?alt="Hero Image"[\s\S]*?fill[\s\S]*?className="object-contain"[\s\S]*?\/\>[\s\S]*?<\/div>/;
const replacement = `        <div class="relative w-full h-100 md:h-125 lg:h-180">\n          <Image\n            src="/images/image_4.png"\n            alt="Hero Image"\n            fill\n            sizes="100vw"\n            style={{ width: "auto", height: "auto" }}\n            className="object-contain"\n          />\n        </div>`;

if (!heroRegex.test(heroText)) {
  throw new Error('HeroSection pattern not found');
}
heroText = heroText.replace(heroRegex, replacement);
fs.writeFileSync(heroPath, heroText, 'utf8');
console.log('HeroSection patched');
