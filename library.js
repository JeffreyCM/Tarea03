const store = {
    sunglasses: {
        inventory: 817,
        cost: 9.99
    },
    pants: {
        inventory: 236,
        cost: 7.99
    },
    bags: {
        inventory: 17,
        cost: 12.99
    }
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemsArr = order.items;
            let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

            if (inStock) {
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost
                });
                console.log(`Todos los artículos están en stock. El costo total del pedido es ${total}.`);
                resolve([order, total]);
            } else {
                reject(`No se pudo completar el pedido porque algunos artículos están agotados.`);
            }
        }, generateRandomDelay());
    });
};

const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let hasEnoughMoney = order.giftcardBalance >= total;
            // Para simplificar, hemos omitido muchas funciones.
            // Si estuviéramos haciendo un código más realista, nos gustaría actualizar el saldo de la tarjeta de regalo y el inventario
            if (hasEnoughMoney) {
                console.log(`Pago procesado con tarjeta de regalo. Generación de etiqueta de envío.`);
                let trackingNum = generateTrackingNumber();
                resolve([order, trackingNum]);
            } else {
                reject(`No se puede procesar el pedido: el saldo de la tarjeta de regalo era insuficiente.`);
            }

        }, generateRandomDelay());
    });
};


const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`El pedido ha sido enviado. El número de seguimiento es: ${trackingNum}.`);
        }, generateRandomDelay());
    });
};


// Esta función genera un número aleatorio para que sirva como "número de seguimiento" en la etiqueta de envío. En la vida real esto no sería un número aleatorio
function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
}

// Esta función genera un número aleatorio para servir como retraso en un setTimeout() ya que las operaciones asincrónicas reales toman cantidades de tiempo variables
function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
}

module.exports = { checkInventory, processPayment, shipOrder };