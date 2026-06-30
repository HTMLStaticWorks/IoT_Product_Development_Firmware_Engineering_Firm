const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  content = content.replace(/<a href="#" class="scroll-top" id="scrollTop">\s*<\/a>/g, '<a href="#" class="scroll-top" id="scrollTop">\n        <i class="fa-solid fa-arrow-up"></i>\n    </a>');
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Restored arrow-up in ' + f);
  }
})
