import aesjs from 'aes-js';



export  default function encrypt(text){
    const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 ];

// The initialization vector (must be 16 bytes)
    const iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36];
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

    const textBytes = aesjs.utils.utf8.toBytes(text);
    const encryptedBytes = aesCbc.encrypt(textBytes);
    // To print or store the binary data, you may convert it to hex
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;

}

export  function decrypt(encryptedHex){
    const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 ];

// The initialization vector (must be 16 bytes)
    const iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];

    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
 
// The cipher-block chaining mode of operation maintains internal
// state, so to decrypt a new instance must be instantiated.
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const decryptedBytes = aesCbc.decrypt(encryptedBytes);
 
// Convert our bytes back into text
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}