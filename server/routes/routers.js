const crypto = require("crypto");
const forge = require("node-forge");
const fs = require("fs");

const express = require("express");
const router = express.Router();

const { generateKeys } = require("../controllers/genrateKeyController");
const { signPdf } = require("../controllers/signController");


/*
To do:
    - Separate this into a different controller
    - Change absolute paths to relative paths
*/

router.get(
  "/hi", // Example
  () => {
    fs.readFile(
      "/Users/rathore/Documents/GitHub/bit2byte/server/routes/document.pdf",
      async (err, pdfBuffer) => {
        if (err) throw err;
        const { pdfBytes, signature } = await signPdf(pdfBuffer, "private.pem");
        fs.writeFileSync("signedDocument.pdf", pdfBytes);
        console.log("Signature:", signature);
      }
    );
  }
);

module.exports = router;
