import { AES } from 'crypto-js'

export const encryptFE = (code, mkey) => AES.encrypt(code, mkey).toString()