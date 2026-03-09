import fs from 'fs';
import pdf from 'pdf-parse';
import path from 'path';

async function testPdf() {
    const filePath = 'c:/Users/dodoa/OneDrive/Desktop/Cosmeticsandskincareguide/data/Eczema_Information.pdf';
    console.log(`Reading: ${filePath}`);
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
testPdf();
