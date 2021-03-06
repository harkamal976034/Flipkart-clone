export const initialState = {
    basket : [],
    // for the user that is logged in
    user : null,
};

export const reducer = (state,action) =>{
    // console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket : [...state.basket,action.item]
            }

        case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (item) => item.id === action.id
                );

                // console.log("index is",index);
                let newBasket = [...state.basket];

                newBasket.splice(index,1);


                return {
                    ...state,
                    basket:newBasket
                }


                // This didn't work in my case (the else case is working always)
                // if(index >=0){
                //     newBasket.splice(index,1);
                // }
                // else{
                //     console.warn("can't find the product that you are trying to remove")
                // }

               
                // This will remove the whole items of that id

                

            
        case "SET_USER":
            console.log("action",action);
            return{
                ...state,
                user:action.user,
            }




         default:
            return state;
    }
}

export default reducer;