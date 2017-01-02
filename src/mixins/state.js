// This is a function that returns an object or a factory function
export default initialState => {
    let _state = initialState || {};

    /*
    * This object is an object literal since its defined right here.
    * This also means that it is created in memory everytime the function returns
    * Everytime the function runs a new object is created
    * Everytime you see the brackets the object is being created.
    */
    return {
        getState() {
            // Returns the shallow copy of the state
            return {
                ..._state
            };
        },

        setState(newState) {
            _state = {
                ..._state,
                ...newState,
            };
        },

        toJSON() {
            return this.getState();
        }

    };
}
