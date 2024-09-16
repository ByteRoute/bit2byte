const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');
const crypto = require('crypto');

// Digitally sign the pdf :)
exports.signPdf = async (pdfBuffer, privateKeyPem) => {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  // Get the current date and time
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString(); 
  const signatureText = 'Digitally Signed by byteRoute';

  // bottom-right corner
  const padding = 20;
  const fontSize = 12;

  // Text
  firstPage.drawText(signatureText, {
    x: width - 250 - padding, 
    y: padding + fontSize * 3, 
    size: fontSize,
    color: rgb(1, 0, 0)     
  });

  // Date
  firstPage.drawText(`Date: ${dateString}`, {
    x: width - 250 - padding,
    y: padding + fontSize * 2, // Slightly above the bottom (change later ?)
    size: fontSize,
    color: rgb(1, 0, 0)
  });

  // Time
  firstPage.drawText(`Time: ${timeString}`, {
    x: width - 250 - padding,
    y: padding + fontSize,   
    size: fontSize,
    color: rgb(1, 0, 0)
  });

  const pdfBytes = await pdfDoc.save();

  const hash = crypto.createHash('sha256');
  hash.update(pdfBytes);
  const pdfHash = hash.digest('hex');

  const sign = crypto.createSign('SHA256');
  sign.update(pdfHash);
  sign.end();

  const privateKey = fs.readFileSync('private.pem', 'utf8');
  const signature = sign.sign(privateKey, 'hex');

  return { pdfBytes, signature };
};
