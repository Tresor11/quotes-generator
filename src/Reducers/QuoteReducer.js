import FETCHING from '../Actions/index';

const initialState = {
    quotes:[["damn","woo","hello","more","riseUp","Godamn!"]],
    category:'',
    status:'DONE'
}

const quotesReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'FETCHING':
            return({...state,status:'loading'});
            break;
        default:
            return state;
    }
}

export default quotesReducer;