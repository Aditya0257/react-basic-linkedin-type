import { configureStore } from "@reduxjs/toolkit";
import userReducer, { fetchUserData } from "../userSlice"; // Update the import to userSlice and fetchUserData

describe("userSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
  });

  it("should handle fetchUserData.pending", () => {
    store.dispatch(fetchUserData()); // Make sure to pass any required arguments to fetchUserData
    const state = store.getState().user;
    expect(state.status).toBe("loading");
  });

  it("should handle fetchUserData.fulfilled", async () => {
    const userId = "someUserId"; // Replace with an actual user ID you want to fetch
    await store.dispatch(fetchUserData(userId)); // Make sure to pass any required arguments to fetchUserData
    const state = store.getState().user;
    expect(state.status).toBe("idle");
    expect(state.user).toEqual({
      id: userId,
      name: "John Doe",
      email: "johndoe@example.com",
      // Other user data based on the mock response from fetchUserData
    });
  });

  it("should handle fetchUserData.rejected", async () => {
    // To test the rejected state, you can modify the fetchUserData mock to return a rejected promise
    jest.spyOn(global, "fetchUserData").mockRejectedValue(new Error("Fetch failed"));

    const userId = "someUserId"; // Replace with an actual user ID you want to fetch
    await store.dispatch(fetchUserData(userId)); // Make sure to pass any required arguments to fetchUserData
    const state = store.getState().user;
    expect(state.status).toBe("idle");
    expect(state.user).toBe(null); // Handle the rejected state in your extraReducers if needed
  });
});
