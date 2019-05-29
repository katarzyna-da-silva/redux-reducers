import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './actions';

// function reducer(state, action) {
//     if (!state) {
//         return initialState;
// }
//     return state;
// }

// es6

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];

        case REMOVE_COMMENT:
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };

        case EDIT_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comments.id === action.id) {
                        comments.text, action.text;
                    }
                })
            };

        case THUMB_UP_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.thumb, comment.add + 1;
                    }
                })
            };

        case THUMB_DOWN_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.thumb, comment.removed - 1;
                    }
                })
            };

        default:
            return state;
    }
}

export default comments;