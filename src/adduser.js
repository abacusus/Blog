import { useReducer } from "react";
import { useDispatch } from "react-redux";

import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const adduser = createSlice({
    name:"blog",
    initialState:{blogs:[]

    },
    reducers:{
        addUser(state, action){
            state.blogs.push({
                name : action.payload.name,
                title : action.payload.title,
                blogData :action.payload.blogData
            });
           // console.log(action.payload);
         },
    }

})

  
export default adduser.reducer;
export const  {addUser}= adduser.actions;
