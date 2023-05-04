import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    firstName: "",
    lastName:"",
    email:"",
    age:"",
    sex:"",
    image:""
};

const CardSlice = createSlice({
    name: 'card',
    initialState: initialValue,
    reducers:{
        updateUserDetails(state, action){
            const { firstName, lastName, email, age, sex, image } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.age = age;
            state.sex = sex;
            state.image = image;
        }
    }    
});

export const{ updateUserDetails } = CardSlice.actions;
export default CardSlice.reducer;