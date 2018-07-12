var redux = require('redux');
var defaultState = {
    'data' : ['android','ios'],
    'isAdding': false
};
var reducer = function (state = defaultState, action){
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return {...state, isAdding: !state.isAdding}
            break;
        case 'ADD_ITEM':
            return {...state, data: [...state.data, action.item]}
            break;
        case 'REMOVE_ITEM':
            return {...state, data: state.data.filter((e, i)=> i != action.index)}
            break;
            
        default:
            
            break;
    }
  return state;  
};
var store = redux.createStore(reducer);
store.subscribe(() => console.log('change', 123456));
console.log('comment', store.getState());
store.dispatch({type: 'REMOVE_ITEM',index: 1});
console.log('comment', store.getState());