import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserDataAPI } from "./userDataAPI";

const initialState = {
  user: null,
  status: "idle",
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId) => {
    const response = await fetchUserDataAPI(userId);
    return response.data; // Assuming the fetched user data is in response.data
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = "idle"; // Handle the rejected state if needed
      });
  },
});

export const { login, logout } = userSlice.actions;

/*
 Selectors -> allow us to pull information from the slice at any component, 
 since it is all layered, and slice can move in this layer independently
*/
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
