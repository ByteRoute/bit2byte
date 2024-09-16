const crypto = require('crypto');
const forge = require('node-forge');
const fs = require('fs');


const express = require("express");
const router = express.Router();
const allController = require("../controllers/allController")

const {generateKeys} = require("../controllers/genrateKeyController")
const {signPdf} = require("../controllers/signController");
const {encryptDocument, decryptDocument, uploadEncryptedFile} = require('../controllers/encryptDocumentController');
const { route } = require('../app');

// router.post("/getCreditRequests", allController.getCreditRequests);
// router.post("/payCredit", allController.payCredit);

// router.post("/getCancellationRequests", allController.getCancellationRequests);
// router.post("/refundCancellation", allController.refundCancellation);





/*

BELOW routes are only to test their respective controllers.

To do:
    - Separate this into a different controller
    - Change absolute paths to relative paths
    
*/

router.get("/hi", // Example
    ()=>{
    fs.readFile('/Users/rathore/Documents/GitHub/bit2byte/server/routes/document.pdf', async (err, pdfBuffer) => {
      if (err) throw err;
      const { pdfBytes, signature } = await signPdf(pdfBuffer, 'private.pem');
      fs.writeFileSync('signedDocument.pdf', pdfBytes);
      console.log('Signature:', signature);
    })
}
);

router.get("/testEncryption", () => {
    const filePath = '/Users/rathore/Documents/GitHub/bit2byte/server/routes/document.pdf';
    const ivFilePath = filePath + '.iv';
    const encryptedFilePath = filePath + '.enc';
    const decryptedFilePath = 'documentDecrypted.pdf';

    // Encrypt
    encryptDocument(filePath, 'a')
        .then(() => {
            console.log('Encryption successful.');
           // Decrypt
            decryptDocument(encryptedFilePath, 'a', ivFilePath, decryptedFilePath)
                .then(() => console.log('Decryption successful.'))
                .catch(err => console.error('Decryption error:', err));
        })
        .catch(err => console.error('Encryption error:', err));
});


module.exports = router;