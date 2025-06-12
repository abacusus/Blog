import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice ({
    name: "user",
    initialState : {
        
        userData:{
            email:"",
            name : "",
            userName :"",
            password :"",
            phoneNum:"",
            image:null,
       }
    },
    reducers:{
        addUser(state, action){
           state.userData={
            ...state.userData,
            ...action.payload,
           }
            console.log(action.payload)
           
         },
        addBlog(state, action){
            state.push(action.payload);
           // console.log(action.payload);
         },
        removeBlog(state,action){ 
           //console.log("hi"+action.payload)
           //state.pop(action.payload)
           state.splice(action.payload,1)
        },
        clearAllUser(state,action){ 
            return state =[];  
        },
    },
});
 console.log( userSlice.actions)
export default userSlice.reducer;
export const  {addUser,addBlog,removeBlog,clearAllUser}= userSlice.actions;