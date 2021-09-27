const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                //возвращаем копию первоначального стэйта
                ...state,
                // эти поля уже поменяют стэйт
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        // если экшн содержит MENU_ERROR то в стор пишем это:
        case 'MENU_ERROR':
            return {
                menu: state.menu,
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
                //если добавляемый айди уже есть, то просто изменить количесвто
                const id = action.payload;
                //ищем в стэйте товар с нужным id
                const itemInd = state.items.findIndex(item => item.id === id);

                    // если такой индекс товара уже есть
                    if(itemInd >= 0 ) {
                        // найдем его в стэйте
                        const itemInState = state.items.find( item => item.id === id)
                        // изменим у него  количество
                        const newItem = {
                            ...itemInState,
                            quantity: ++itemInState.quantity
                        }
                        // изменим стэйт
                        return {
                            ...state,
                            items: [...state.items.slice(0, itemInd), ...state.items.slice(itemInd + 1), newItem],
                            //If we have first adding good to cart just addition
                            totalPrice: state.totalPrice += newItem.price
                        }
                    }
                    // если товара нет в корзине
                    // берем из массива меню товар соответсвующий ид
                    const item = state.menu.find( item => item.id === id)
                    // создаем на его основе новый товар
                    const newItem = {
                        title: item.title,
                        price: item.price,
                        url: item.url,
                        id: item.id,
                        quantity: 1
                    }
                    // добавляем в стэйт
                    return {
                        ...state,
                        items: [
                            ...state.items,
                            newItem
                        ],
                        // count sum of our cart. Multimply the price by the quantity
                        totalPrice: state.totalPrice += (newItem.price * newItem.quantity )
                    }
        case 'ITEM_REMOVE_FROM_CART':
            const index = action.payload;
            // получаем удаляемый товар
            const itemForDelete = state.items.find(item => item.id === index)
            // ищем в стэйте идекс элемента
            const itemIndex = state.items.findIndex(item => item.id === index)
            return {
                ...state,
                // как правильно удалить элемент из массива не нарушая иммутабельности
                items: [
                    ...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)
                ],
                // subtract the cost of deleted goods
                totalPrice: state.totalPrice -= (itemForDelete.price * itemForDelete.quantity )
            }
        default: 
        return state;
    }
}

export default reducer;