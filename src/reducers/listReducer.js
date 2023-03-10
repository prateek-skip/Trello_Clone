import { CONSTANTS } from "../actions";


let listID = 2;

const initialState = [
    {
        title: "Last Episode",
        id:0,
        cards: [
            {
                id:0,
                text: "we created a static list and a static card"
            },
            {
                id:1,
                text:"we used a mix between materialUI react and styled"
            }
        ]
    },{
        title: "This Episode",
        id:1,
        cards: [
            {
                id:0,
                text: "we are creating a static list and a static card"
            },
            {
                id:1,
                text:"we are using a mix of material, react and styled"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title : action.payload.title,
                cardds:[],
                id: listID++
            };
            return [...state,newList];
        default :
        return state;
    }
};

export default listReducer;