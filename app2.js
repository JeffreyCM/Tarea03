const lluviaDeIdeasCena = require('./library2.js');


// Native promise version:
function nativePromiseDinner() {
  lluviaDeIdeasCena().then((comida) => {
	  console.log(`voy a hacer ${comida} para la cena.`);
  });
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  const comida = await lluviaDeIdeasCena();
  console.log(`Voy a hacer ${comida} para la cena.`);
}
 