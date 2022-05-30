export class Random {
  public randomUserName() {
    let charsUserName =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789'
    let userName = ''
    for (let ii = 0; ii < 7; ii++) {
      userName +=
        charsUserName[Math.floor(Math.random() * charsUserName.length)]
    }
    return userName
  }
}
