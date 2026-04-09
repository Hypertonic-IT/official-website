const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'modules', 'website', 'pages');
const serviceDirs = ['Webapp', 'Appdevelopment', 'Saas', 'Uiux', 'Smm', 'Social', 'Addvertise', 'Software', 'Website', 'Portfolio'];

serviceDirs.forEach(dir => {
    // Determine the JS file inside the dir. 
    // Wait, some are named differently (e.g., Website/Web.js). Let's load the dir and take the first .js file
    const dirPath = path.join(pagesDir, dir);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);
    const jsFile = files.find(f => f.endsWith('.js'));

    if (jsFile) {
        const filePath = path.join(dirPath, jsFile);
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if CTA exists
        if (!content.includes('cta-btn-modern')) {
            const btnCode = `
      {/* Universal Service CTA */}
      <div style={{ background: 'transparent', textAlign: 'center', padding: '60px 0 120px', position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontSize: '32px', color: '#fff', fontWeight: '800', marginBottom: '30px', letterSpacing: '-1px' }}>Ready to transform your vision?</h3>
        <a href="/contact" className="cta-btn-modern" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', background: '#fff', color: '#000', padding: '16px 45px', borderRadius: '100px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(255,255,255,0.1)' }}>
           Start Your Project <i className="ri-arrow-right-line" style={{ marginLeft: '10px' }}></i>
        </a>
      </div>
      <Footer />`;

            content = content.replace(/<Footer \/>/, btnCode);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log("Added CTA to", filePath);
        }
    }
});
