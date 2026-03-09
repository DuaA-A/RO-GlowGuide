import fs from 'fs';
import mammoth from 'mammoth';

async function readDocx() {
    const filePath = 'c:/Users/dodoa/OneDrive/Desktop/Cosmeticsandskincareguide/data/skin care.docx';
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        console.log('--- CONTENT START ---');
        console.log(result.value);
        console.log('--- CONTENT END ---');
    } catch (e) {
        console.error('FAILED:', e);
    }
}
readDocx();
