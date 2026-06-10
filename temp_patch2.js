const fs = require('fs');

function replaceNthOccurrence(text, search, replacement, n) {
  let i = 0;
  return text.replace(new RegExp(search, 'g'), (match) => {
    i += 1;
    return i === n ? replacement : match;
  });
}

const actionPath = 'd:\\work\\Frontend\\NextJs Projects\\tiny-project\\src\\app\\components\\Action.tsx';
let actionText = fs.readFileSync(actionPath, 'utf8');
const actionSearch = `                <Image\n                  src={item.image}\n                  alt={item.title}\n                  fill\n                  className=\"object-contain\"\n                />`;
const actionReplacement = `                <Image\n                  src={item.image}\n                  alt={item.title}\n                  fill\n                  sizes=\"(max-width: 640px) 100vw, 192px\"\n                  style={{ width: \\"auto\\", height: \\"auto\\" }}\n                  className=\"object-contain\"\n                />`;
actionText = replaceNthOccurrence(actionText, actionSearch, actionReplacement, 2);
if (!actionText.includes('sizes="(max-width: 640px) 100vw, 192px"')) {
  throw new Error('Action second occurrence not patched');
}
fs.writeFileSync(actionPath, actionText, 'utf8');

const heroPath = 'd:\\work\\Frontend\\NextJs Projects\\tiny-project\\src\\app\\components\\HeroSection.tsx';
let heroText = fs.readFileSync(heroPath, 'utf8');
const heroSearch = `        <div class=\"relative w-full h-100 md:h-125 lg:h-180\">\n          <Image\n            src=\"/images/image_4.png\"\n            alt=\"Hero Image\"\n            fill\n            className=\"object-contain\"\n          />\n        </div> `;
const heroReplacement = `        <div class=\"relative w-full h-100 md:h-125 lg:h-180\">\n          <Image\n            src=\"/images/image_4.png\"\n            alt=\"Hero Image\"\n            fill\n            sizes=\"100vw\"\n            style={{ width: \\"auto\\", height: \\"auto\\" }}\n            className=\"object-contain\"\n          />\n        </div> `;
heroText = heroText.replace(heroSearch, heroReplacement);
if (!heroText.includes('sizes="100vw"')) {
  throw new Error('HeroSection not patched');
}
fs.writeFileSync(heroPath, heroText, 'utf8');

console.log('patched');
