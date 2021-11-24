
//.find & findIndex
const array = [
   {name: 'iphone', price: 5000, quantity: 2 },
   {name: 'MacBook Pro', price: 20000, quantity: 1 },
   { name: 'Magic mouse', price: 1001, quantity: 5 },
];


const find = array.find((product) => product.price > 1000);
   
   //return true;

   const findIndex = array.findIndex((product) => product.name === 'MacBook Pro');
  // console.log({findIndex});
  // console.log('Produto:', array[findIndex])

   //.some & every
const some = array.some((product) => product.price > 1000);
   //console.log(product);});

//console.log({some});
const every = array.every((product) => product.price >= 1000);

//console.log({every});
const map = array.map((product) => ({
   //console.log(product);
      ...product,
      subtotal: product.quantity * product.price,
   }));   
  

//console.log({map});
const filter = array.filter((product) => product.quantity >= 5);
//console.log({filter});
const reduce = array.reduce((accumulator, product) => {
   return accumulator + (product.price * product.quantity);
}, 0);
console.log({reduce});
