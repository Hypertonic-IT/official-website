const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'modules', 'website', 'components');

fs.readdirSync(componentsDir).forEach(dir => {
  const cssPath = path.join(componentsDir, dir, 'component.css');
  if (fs.existsSync(cssPath)) {
    let content = fs.readFileSync(cssPath, 'utf8');
    let changed = false;

    // Fix color
    if (content.match(/border-left:\s*3px\s+solid\s+#1CB89E;/i)) {
      content = content.replace(/border-left:\s*3px\s+solid\s+#1CB89E;/ig, 'border-left: 3px solid #111111;');
      changed = true;
    }

    // Fix margin
    if (content.match(/margin-top:\s*76px;/)) {
      content = content.replace(/margin-top:\s*76px;/g, 'margin-top: 86px;');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(cssPath, content, 'utf8');
      console.log('Fixed', cssPath);
    }
  }
});
