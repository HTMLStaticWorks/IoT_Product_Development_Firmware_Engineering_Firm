const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  content = content.replace(/<i class="fa-solid fa-[a-zA-Z0-9-]+"[^>]*><\/i>/g, match => {
      if (match.includes('arrow') || match.includes('warning') || match.includes('exclamation')) {
          return '';
      }
      return match;
  });
  content = content.replace(/&rarr;|→/g, '');
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
})
