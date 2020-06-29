export const addItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.selectedColor}`;

    if (cartItems[cartItem]) {
        return {
            ...cartItems,
            [cartItem]: { ...cartItems[cartItem], quantity: cartItems[cartItem].quantity + (item.quantity ? item.quantity : 1) }
        };
    } else {
        return {
            ...cartItems,
            [cartItem]: item
        };
    };
};

export const removeItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.selectedColor}`;

    if (cartItems[cartItem].quantity === 1) {

        return clearItem(cartItems, item);

    } else {

        return {
            ...cartItems,
            [cartItem]: { ...cartItems[cartItem], quantity: cartItems[cartItem].quantity - 1 }
        };

    };
};

export const clearItem = (cartItems, item) => {

    const cartItem = `${item.id}_${item.selectedColor}`;

    delete cartItems[cartItem];

    return {
        ...cartItems
    };
};








