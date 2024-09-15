const crypto = require('crypto');
const forge = require('node-forge');
const fs = require('fs');


exports.generateKeys = async(req, res, next) =>{
    try{
        // Generate
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        });

        // Save
        fs.writeFileSync('private.pem', privateKey.export({ type: 'pkcs1', format: 'pem' }));
        fs.writeFileSync('public.pem', publicKey.export({ type: 'pkcs1', format: 'pem' }));
    }catch(error){
        return next(new AppError("Error occurred while generating keys", 500));
    }
}