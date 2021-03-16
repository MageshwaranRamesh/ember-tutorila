import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params, hash = {}) {
    const [number] = params;
    const {
      sign = "₹"
    } = hash;
    const rupee = Math.floor(number)
    let paise = Math.floor(number * 100 % 100)
    if (paise.toString.length === 1) {
      paise = '0' + paise
    }
    return `${sign}${rupee}.${paise}`;
  }
};
