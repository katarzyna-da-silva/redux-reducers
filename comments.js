import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './action';

// function reducer(state, action) {
//     if (!state) {
//         return initialState;
// }
//     return state;
// }

// es6

// instrukcja switch !!!
function comments(state = [], action) {
    switch (action.type) {   // podejmowanie decyzji na podstawie wartosci jednej zmiennej // tutaj typ, akcji np. dodaj komentarz     ??????????? 
        case ADD_COMMENT: //  jeśli wartość zmiennej (występującej po słowie kluczowym switch) będzie równa wartości umieszczonej po słowie kluczowym case, to wykonaj kod
            return [{  // i zwroci to co wg tablicy : 
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];

        case REMOVE_COMMENT: // case => przypadek sprawdzamy switch action.type => z removecomment, jesli sie zgadza wykonaj kod umieszczony na dole 
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };

        case EDIT_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comments.id === action.id) {
                        comments.text, action.text;
                    }
                    return comment;
                })
            };

        case THUMB_UP_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.thumb++; // to to samo co : comment.thumb, comment.add +1, removed - 1;  przez inkrementacje i dekrementacje
                    }
                    return comment;
                })
            };

        case THUMB_DOWN_COMMENT:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id === action.id) {
                        comment.thumb--;
                    }
                    return comment;
                })
            };
// break : przerywa !!!!  
        default:  // jesli przypadki sie nie spelnia, to zwraca state
            return state;
    }
}

export default comments;