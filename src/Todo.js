// This is a Todo. It represents one item in the todo list

import shortid from 'shortid';
import compose from './compose';
import State from './mixins/state';


const TodoPrototype = {
    getId() {
        return this.getState().id;
    },

    getTitle() {
        return this.getState().title;
    },

    setTitle( title ) {
        this.setState({ title });
    },

    isComplete() {
        return this.getState().complete === true;
    },

    toggleComplete() {
        const complete = this.getState().complete;
        this.setState({ complete: !complete});
    }
}

export default todo => {

    if ( typeof todo !== 'object') {
        todo = {
            id: shortid.generate(),
            title: todo,
            complete: false
        };
    }

    return compose( State ( todo ), TodoPrototype );
}
