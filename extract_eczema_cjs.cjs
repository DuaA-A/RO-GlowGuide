const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdf() {
    const filePath = 'c:/Users/dodoa/OneDrive/Desktop/Cosmeticsandskincareguide/data/eczima_data.pdf';
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        console.log('--- CONTENT START ---');
        console.log(data.text);
        console.log('--- CONTENT END ---');
    } catch (e) {
        console.error('FAILED:', e);
    }
}
readPdf();
