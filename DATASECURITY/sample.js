const crypto = require('crypto');
const fs = require('fs');

// 1. Create a key for encryption
const encryptionKey = crypto.randomBytes(32); // Generating a random 256-bit key

// 2. Use the key to encrypt data
const algorithm = 'aes-256-cbc'; // Using AES-256-CBC encryption algorithm

// 3. Encrypt the data
const message = 'Oh ! ELIAB YOU HAVE DONE IT WELL';
const iv = crypto.randomBytes(16); // Generating a random initialization vector

const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
let encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');

// 4. Store the encrypted data
const encryptedData = {
    iv: iv.toString('hex'), // Storing the IV in hex format
    encryptedMessage: encrypted // Storing the encrypted message
};

// Saving the encrypted data to a file
fs.writeFileSync('encryptedData.html', JSON.stringify(encryptedData, null, 2));

console.log('Data has been encrypted and saved to "encryptedData.json".');