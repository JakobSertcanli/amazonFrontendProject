import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
const oneMonth = today.add(1, 'month');
const formated = oneMonth.format('MMMM D');
console.log(formated);
