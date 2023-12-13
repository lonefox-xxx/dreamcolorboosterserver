const crypto = require('crypto');

function generaterefcode(length = 10) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charLength = characters.length;

    let randomString = '';
    const randomBytes = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        const randomIndex = randomBytes[i] % charLength;
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

module.exports = generaterefcode;