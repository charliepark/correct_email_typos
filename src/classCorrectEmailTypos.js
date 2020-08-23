import correctEmailTypos from './correctEmailTypos.js'

class Email {
  constructor (address) {
    this.original = address;
    this.corrected = correctEmailTypos(address);
  }
}

export default Email;
