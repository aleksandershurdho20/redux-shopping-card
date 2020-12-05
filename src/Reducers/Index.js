import { Laptop } from "@material-ui/icons"

const initialValue = {
    value: 0,
    cartItem: 0,
    price: 500,

}
export const Index = (state = initialValue, action) => {
    console.log('hi', state)

    switch (action.type) {
        case ('INCREMENT'):


            return { ...state, value: state.value + 1 }
        case ('DECREMENT'):
            return { ...state, value: state.value - 1 }
        case ('ADD_CART'):
            return { ...state, cartItem: state.cartItem = 1 }


        default: return initialValue
    }
}