const Response = require("../utils/Response");
const response = new Response();
const getConvertedVal = (input) => {

    return ("0x" + input.charCodeAt(0).toString(16))
}
const getHmacKeyArray = (input, arraylength) => {
    const hmac = [];

    for (let i = 0; i < arraylength - 1; i++) {
        const hexval = getConvertedVal(input[i])
        const hexval1 = getConvertedVal(input[i + 1]);
        const hmacVal = (hexval ^ hexval1) | 0x63
        hmac.push(hmacVal.toString())
    }
    const lastmacval = getConvertedVal(input[arraylength - 1])
    const hamcresult = (lastmacval ^ 0x79) | 0x63;
    hmac.push(hamcresult.toString())
    return hmac;

}
const getEncryptedAESKey = (input, arraylength) => {
    const aeskey = []
    for (let i = 0; i < arraylength; i++) {
        const hexval = getConvertedVal(input[i])
        let val = (hexval | 0x47).toString()
        aeskey.push(val);
    }
    for (let i = 8; i < 15; i++) {
        const hexval = getConvertedVal(input[i - 8])
        const hexval1 = getConvertedVal(input[i - 7])
        const result = ((hexval) ^ (hexval1)) | 0x47
        aeskey.push(result.toString())
    }

    const hexval2 = getConvertedVal(input[7])
    const res1 = ((hexval2) ^ 0x79) | 0x47
    aeskey.push(res1.toString())
    return aeskey
}
class Utils {


    getSecret(req, res, next) {
        const str = req.query.boxid
        const strarray1 = Array.from(str);
        const arraylength = strarray1.length;
        if (arraylength === 8) {
            const hmac = getHmacKeyArray(strarray1, arraylength)
            const aeskey = getEncryptedAESKey(strarray1, arraylength);
            response.successReponse({ status: 200, result: { encryptedKey: aeskey, hmac, outputsize: aeskey.length, inputsize: arraylength }, res })
        } else {
            response.errorResponse({ status: 400, result: "Input data Byte size should be 8" })
        }

    }

}


module.exports = Utils