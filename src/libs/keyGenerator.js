import { randomBytes } from "crypto";

export class KeyGenerator{
    encoding
    constructor(encoding = "hex"){
        this.encoding = encoding
    }

    generate(keyLength = 32){
        return randomBytes(keyLength).toString(this.encoding);

    }
}