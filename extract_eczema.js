import fs from 'fs';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';
import path from 'path';

async function extractText() {
    const dataDir = './data';
    const files = [
        'Eczema_Information.pdf',
        'eczima_data.pdf',
        'skin care.docx'
    ];

    for (const file of files) {
        const filePath = path.resolve(dataDir, file);
        if (!fs.existsSync(filePath)) {
            console.log(`File not found: ${file}`);
            continue;
        }

        console.log(`\n--- Extracted from ${file} ---`);
        try {
            if (file.endsWith('.pdf')) {
                const dataBuffer = fs.readFileSync(filePath);
                const data = await pdf(dataBuffer);
                console.log(data.text);
            } else if (file.endsWith('.docx')) {
                const result = await mammoth.extractRawText({ path: filePath });
                console.log(result.value);
            }
        } catch (error) {
            console.error(`Error reading ${file}:`, error);
        }
    }
}

extractText();
