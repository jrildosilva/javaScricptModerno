const apiCall = new Promise((resolve, reject) => {
   // console.log('dentro da promise');
   //resolve('sucesso');
   setTimeout(() => {
    resolve('sucesso, 10');
    //reject('Erro/ crasso!');
   }, 1000 );
  
});

/*apiCall
     .then((resposta) => {
      console.log(resposta);
})
      .catch((erro) => {
       console.log(erro);
});
console.log('Depois da promise...');
*/
async function run() {
    try{
        const resposta = await apiCall;
        console.log(resposta);
        console.log('Depois da promise...');

    } catch (erro) {
        console.log(erro);
    }

}

run();

