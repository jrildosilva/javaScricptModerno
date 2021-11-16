const array = [
   {name: 'iphone', price: 5000, quantity: 2 },
   {name: 'MacBook Pro', price: 20000, quantity: 1 },
   { name: 'Magic mouse', price: 1000, quantity: 5 },
];


const find = array.find((product) => product.price > 1000);
   
   //return true;

   const findIndex = array.findIndex((product) => product.name === 'MacBook Pro');
   console.log({findIndex});
   console.log('Produto:', array[findIndex])
