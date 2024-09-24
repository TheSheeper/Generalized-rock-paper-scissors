import {createHmac} from "node:crypto"

export class HMACGenerator{
    key;
    encoding;

    constructor(key, encoding = "hex"){
        this.key = key;
        this.encoding = encoding
    }

    generateHMAC(data){
        const hmac = createHmac("sha3-256", this.key);
        hmac.update(data);
        return hmac.digest(this.encoding);
    }
}