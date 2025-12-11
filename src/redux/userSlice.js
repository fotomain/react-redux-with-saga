import { createSlice } from "@reduxjs/toolkit";

            ///01
export const userSliceHandle = createSlice({
    ///02
    name: "userSlice",
    initialState: {
        ///03
        JSONFromServer: {},
        userGUID:'',
        isLoading: false,
        isError: false,
    },
    reducers: {
        setGUID: (state,action) => {
            state.userGUID = action.payload;
        },
        getData: (state) => {
            state.isLoading = true;
            state.isError=false;
        },
        getDataSuccess: (state, action) => {
            state.JSONFromServer = action.payload;
            state.isLoading = false;
        },
        getDataFailure: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

// const userSliceHandle = sliceFabric()

///04
export const userActions= userSliceHandle.actions;
///05
export const userReducer = userSliceHandle.reducer
