const fs = require('fs');

const actionPath = 'd:\\work\\Frontend\\NextJs Projects\\tiny-project\\src\\app\\components\\Action.tsx';
let actionText = fs.readFileSync(actionPath, 'utf8');
const actionRegex = /src=\{item\.image\}[\s\S]*?alt=\{item\.title\}[\s\S]*?fill[\s\S]*?className="object-contain"/g;
let count = 0;
actionText = actionText.replace(actionRegex, (match) => {
  count += 1;
  if (count === 2) {
    return match.replace('fill\n                  className="object-contain"', 'fill\n                  sizes="(max-width: 640px) 100vw, 192px"\n                  style={{ width: "auto", height: "auto" }}\n                  className="object-contain"');
  }
  return match;
});
if (count < 2) {
  throw new Error('Did not find two Action image occurrences');
}
fs.writeFileSync(actionPath, actionText, 'utf8');
console.log('Action second image patched');
