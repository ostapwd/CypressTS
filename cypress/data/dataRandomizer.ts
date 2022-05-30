export class Random {
  public randomUserName() {
    let charsUserName =
      'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789'
    let userName = ''
    for (let i = 0; i < 7; i++) {
      userName +=
        charsUserName[Math.floor(Math.random() * charsUserName.length)]
    }
    return userName
  }
}
