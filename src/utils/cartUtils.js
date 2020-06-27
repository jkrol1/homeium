export const addItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.color}`;

    if (cartItems[cartItem]) {
        return {
            ...cartItems,
            cartItem: { ...cartItem, quantity: cartItem.quantity + 1 }
        };
    } else {
        return {
            ...cartItems,
            cartItem: item
        };
    };
};

export const removeItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.color}`;

    if (cartItems[cartItem].quantity === 1) {

        clearItem();

    } else {

        return {
            ...cartItems,
            cartItem: { ...cartItem, quantity: cartItem.quantity - 1 }
        };

    };
};

export const clearItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.color}`;

    if (cartItems[cartItem].quantity === 1) {

        delete cartItems[cartItem];

        return {
            ...cartItems
        };
    }
};







