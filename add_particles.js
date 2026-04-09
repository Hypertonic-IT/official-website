const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'modules', 'website', 'components');
const filesToUpdate = ['Section6', 'Section9', 'Section13', 'Section17', 'Section21', 'Section26', 'Section28', 'Section30', 'Section32', 'Section34', 'Section36', 'Section24', 'Section25'];

filesToUpdate.forEach(dir => {
    const compPath = path.join(componentsDir, dir, 'Component.js');
    if (fs.existsSync(compPath)) {
        let content = fs.readFileSync(compPath, 'utf8');

        // Add import if missing
        if (!content.includes('import ParticlesBackground')) {
            content = content.replace(/(import.*\;)/, "$1\nimport ParticlesBackground from '../Particles/ParticlesBackground';");
        }

        // Add component if missing
        if (!content.includes('<ParticlesBackground')) {
            content = content.replace(/<div className="page-hero-section">/g,
                '<div className="page-hero-section">\n      <ParticlesBackground color="#d4d4d4" id="particles-' + dir + '" position="absolute" zIndex={0} />');
        }

        fs.writeFileSync(compPath, content, 'utf8');
    }

    const cssPath = path.join(componentsDir, dir, 'component.css');
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf8');

        // Add position relative and overflow hidden to page-hero-section
        if (cssContent.includes('.page-hero-section {') && !cssContent.includes('position: relative;')) {
            cssContent = cssContent.replace(/\.page-hero-section\s*\{/, '.page-hero-section {\n  position: relative;\n  overflow: hidden;');
            fs.writeFileSync(cssPath, cssContent, 'utf8');
        }
    }
});
console.log("Updated files!");
