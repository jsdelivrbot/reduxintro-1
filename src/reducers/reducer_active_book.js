// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    console.log(action.type, state)

    switch(action.type) {
        case 'BOOK_SELECTED':
            return state.payload
    }
    return state
}