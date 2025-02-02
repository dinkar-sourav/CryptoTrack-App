import {create} from 'zustand';

const store = create((set)=>({
    curr:'usd',
    setCurr:(newCurrency)=>set((state)=> {
        return (
            {...state,
            curr:newCurrency}
        )
    })

}));

export default store;