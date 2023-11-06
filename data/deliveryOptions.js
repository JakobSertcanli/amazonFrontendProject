import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}





export function calculateDeliveryDate(deliveryOption){
  
  let today = dayjs();
  
  while(today.format('dddd') === 'Sunday' || today.format('dddd') === 'Saturday' || today.format('dddd') === 'Friday'){
    today = today.add(1, 'day');
  }

  const deliveryDate = today.add(
    deliveryOption.deliveryDays,
    'days'
  );
  
  const deliveryDateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  return deliveryDateString;
}
