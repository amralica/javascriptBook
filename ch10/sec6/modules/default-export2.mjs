console.log('// Exporting a default object with multiple features')

const UNICODE_CHARS = 17 * 65536

function encrypt(str, key) {
  return String.fromCodePoint(...[...str].map(c =>
    (c.codePointAt(0) + key) % UNICODE_CHARS))  
}

class Cipher {
  constructor(key) { this.key = key }
  encrypt(str) {
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) + this.key) % UNICODE_CHARS))
  }
  decrypt(str) {
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) - this.key + UNICODE_CHARS)
        % UNICODE_CHARS))
  }
}

export const DEFAULT_KEY = 3

export default { encrypt, Cipher, DEFAULT_KEY }