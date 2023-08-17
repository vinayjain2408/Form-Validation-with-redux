import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"user",
    initialState:{
        name:"",
        email:"",
        password:"",
        user:null,
    },
    reducers:{
        setName: function (state, action) {
            state.name = action.payload;
        },
        setEmail: function (state, action) {
            state.email = action.payload;
          },
          setPassword: function (state, action) {
            state.password = action.payload;
          },
        login:(state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user = null;
        }
    }
})

export const {login , logout,setEmail,setName,setPassword} = userSlice.actions;

export const selectUser = (state)=> state.user.user

export default userSlice.reducer