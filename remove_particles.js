const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'modules', 'website', 'components');
const filesToUpdate = ['Section6', 'Section9', 'Section13', 'Section17', 'Section21', 'Section26', 'Section28', 'Section30', 'Section32', 'Section34', 'Section36', 'Section24', 'Section25'];

filesToUpdate.forEach(dir => {
    const compPath = path.join(componentsDir, dir, 'Component.js');
    if (fs.existsSync(compPath)) {
        let content = fs.readFileSync(compPath, 'utf8');

        // Remove the explicitly injected particles tag
        content = content.replace(/<ParticlesBackground\s+color="#d4d4d4"\s+id="particles-[^"]+"\s+position="absolute"\s+zIndex=\{0\}\s*\/>\s*/g, '');

        fs.writeFileSync(compPath, content, 'utf8');
        console.log("Removed from", dir);
    }
});
