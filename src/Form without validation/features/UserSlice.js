import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"user",
    initialState:{
        para:"",
        namePara:"",
        paraEmail:"",
        submit:"",
        name:"",
        email:"",
        password:"",
        user:null,
        isEmailValid: false,
    },
    reducers:{
        setPara: function (state, action) {
            state.para = action.payload;
        },
        setnamePara: function (state, action) {
            state.namePara = action.payload;
        },
        setparaEmail: function (state, action) {
            state.paraEmail = action.payload;
        },
        setName: function (state, action) {
            state.name = action.payload;
        },
        setEmail: function (state, action) {
            state.email = action.payload;
          },
          setPassword: function (state, action) {
            state.password = action.payload;
          },
          setSubmit: function (state, action) {
            state.submit = action.payload;
        },
  
    }
})

export const {login , logout,setEmail,setName,setPassword ,setEmailValidity,setPara, setparaEmail,setSubmit, setnamePara} = userSlice.actions;

// export const selectUser = (state)=> state.user.user

export default userSlice.reducer