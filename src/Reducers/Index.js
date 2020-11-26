const initialValue = {
    value: 0,
}

export const Index = (state = initialValue, action) => {
    console.log('hi', state)

    switch (action.type) {
        case ('INCREMENT'):
            return { ...state, value: state.value + 1 }
        case ('DECREMENT'):
            return { ...state, value: state.value - 1 }
        default: return initialValue
    }
}