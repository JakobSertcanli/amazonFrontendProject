import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


const today = dayjs();
const fiveDays = today.add(5, 'days');
const format = fiveDays.format('MMM D');
console.log(format);






