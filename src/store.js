import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./blog.js";
import addUserSlice from "./adduser.js";

const store = configureStore ({
    reducer : {
        users: userSlice, 
        blogs : addUserSlice,
    },
}) ;
export default store ;