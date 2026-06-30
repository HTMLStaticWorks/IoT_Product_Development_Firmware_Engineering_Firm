const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  content = content.replace(/<i class="fa-solid fa-arrow-right"(?: style="margin-left: 5px;")?><\/i>/g, '');
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
})
