import { createSlice } from "@reduxjs/toolkit";

            ///01
export const userSliceHandle = createSlice({
    ///02
    name: "userSlice",
    initialState: {
        ///03
        userSettings: {userGUID:"111"},
        isLoading: false,
    },
    reducers: {
        getData: (state) => {
            state.isLoading = true;
        },
        getDataSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getDataFailure: (state) => {
            state.isLoading = false;
        }
    }
});

///04
export const userActions= userSliceHandle.actions;
///05
export const userReducer = userSliceHandle.reducer
