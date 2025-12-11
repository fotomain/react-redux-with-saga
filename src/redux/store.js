import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catSlice";
import createSagaMiddleware from "redux-saga";
import catSaga from "./catSaga";
import {userReducer} from "./userSlice.js";
import userSaga from "./userSaga.js";

const saga = createSagaMiddleware();

// console.log("█████ here 000")

export const store = configureStore({
    reducer: {
        cats: catsReducer,
        ///06
        userState:userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        ///saga-4
        getDefaultMiddleware().concat(saga),
});

// console.log("█████ here 111")

///saga-5
saga.run(catSaga);
saga.run(userSaga);
