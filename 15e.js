import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


 export default function isWeekend(date){
    const Weekend = date.format('dddd');
    return Weekend === 'Sunday' || Weekend === 'Saturday' ?  Weekend : undefined;
    } 


    /*
let date = dayjs();
console.log(isWeekend(date));

date = date.add(7, 'days');
console.log(isWeekend(date));

date = date.add(14, 'days');
console.log(isWeekend(date));

date = date.add(8, 'days');
console.log(isWeekend(date));

date = date.add(9, 'days');
console.log(isWeekend(date));

*/




