import { createSlice } from "@reduxjs/toolkit";
import { iUser } from "../../models/iUser"
import { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    users: iUser[];
    isLoading: boolean;
    error:string;
    count:number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         increment(state, action: PayloadAction<number>) {
             state.count += action.payload;
         }
    }
})

export default userSlice.reducer;