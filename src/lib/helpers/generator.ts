export function generateNumCode(len: number) {
    let pwd = '';
    for (let i = 0 ; i < len; i++) {
      pwd += Math.floor(Math.random() * 10);
    }
    return pwd;
}