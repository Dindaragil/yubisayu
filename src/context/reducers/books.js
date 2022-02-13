const books = (state, { type, payload }) => {
    switch (type) {
        case 'GET_BOOKS':
            return state;

        default:
            return state
    }
}

export default books;