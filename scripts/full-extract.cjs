const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function extract(filename) {
    const filePath = path.join(__dirname, '..', 'data', filename);
    try {
        const result = await mammoth.convertToHtml({ path: filePath });
        console.log(`\n--- ${filename} ---\n`);
        console.log(result.value.replace(/<\/p>/g, '\n').replace(/<\/h[1-6]>/g, '\n').replace(/<[^>]+>/g, ' '));
    } catch (err) {
        console.error(`Error processing ${filename}:`, err);
    }
}

async function main() {
    await extract('skin care.docx');
    await extract('Hair_Routine_Dandruff_SplitEnds_Guide.docx');
    await extract('anti-dandruff products.docx');
}

main();
