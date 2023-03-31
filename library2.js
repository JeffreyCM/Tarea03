const lluviaDeIdeasCena = () => {
    return new Promise((resolve, reject) => {
      console.log(`Tengo que decidir que hay para cenar...`)
      setTimeout(() => {
        console.log('¿Debo hacer ensalada...?');
        setTimeout(() => {
          console.log('¿Debería hacer ramen...?');
          setTimeout(() => {
            console.log('¿Debo hacer huevos...?');
            setTimeout(() => {
              console.log('¿Debería hacer pollo...?');
              resolve('frijoles');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    });
  };
  
  module.exports = lluviaDeIdeasCena;