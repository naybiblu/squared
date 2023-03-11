export function generateNumCode(len: number) {
    let pwd = '';
    for (let i = 0 ; i < len; i++) {
      pwd += Math.floor(Math.random() * 10);
    }
    return pwd;
}

export function getRandomInt(min: number, max: number, exclude = false) {
  let result: number;
  if (exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } else result = Math.round(Math.random() * (max - min) + min);
  return result;
}