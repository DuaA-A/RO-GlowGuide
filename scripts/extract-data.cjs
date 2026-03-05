const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const pdf = require('pdf-parse');

async function extractDocx(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
}

async function extractPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
}

async function main() {
    const dataDir = path.join(__dirname, '..', 'data');
    const files = fs.readdirSync(dataDir);

    for (const file of files) {
        const filePath = path.join(dataDir, file);
        const ext = path.extname(file).toLowerCase();

        console.log(`--- Content from: ${file} ---`);
        try {
            if (ext === '.docx') {
                const text = await extractDocx(filePath);
                console.log(text);
            } else if (ext === '.pdf') {
                const text = await extractPdf(filePath);
                console.log(text);
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
        console.log('\n\n');
    }
}

main();
