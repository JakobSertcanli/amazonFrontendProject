import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


const today = dayjs();
const before = today.subtract(1, 'month');
const format = before.format('MMMM D');
console.log(format);

