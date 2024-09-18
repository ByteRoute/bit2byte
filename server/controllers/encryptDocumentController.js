const crypto = require('crypto');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;


// Encrypt 
exports.encryptDocument = async (filePath, password) => {
    return new Promise((resolve, reject) => {
      try {
        const algorithm = 'aes-256-cbc';
        const key = crypto.createHash('sha256').update(password).digest();
        const iv = crypto.randomBytes(16);
  
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        const input = fs.createReadStream(filePath);
        const output = fs.createWriteStream(filePath + '.enc');
  
        input.pipe(cipher).pipe(output);

        output.on('finish', () => {
          fs.writeFileSync(filePath + '.iv', iv);
          resolve();
        });
  
        output.on('error', (err) => reject(err));
  
      } catch (error) {
        reject(error);
      }
    });
  };
  

  // Decrypt 
  exports.decryptDocument = async (encryptedFilePath, password, ivFilePath, outputFilePath) => {
    return new Promise((resolve, reject) => {
      try {
        const algorithm = 'aes-256-cbc';
        const key = crypto.createHash('sha256').update(password).digest();
        const iv = fs.readFileSync(ivFilePath);
  
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        const input = fs.createReadStream(encryptedFilePath);
        const output = fs.createWriteStream(outputFilePath);
  
        input.pipe(decipher).pipe(output);
  
        output.on('finish', () => resolve());
        output.on('error', (err) => reject(err));
  
      } catch (error) {
        reject(error);
      }
    });
  };
  

// Upload encrypted file to Cloudinary
exports.uploadEncryptedFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    console.log('Upload successful:', result);
  } catch (error) {
    console.error('Upload error:', error);
  }
};