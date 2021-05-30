import { createSlice } from "@reduxjs/toolkit";

// const [userName, setUserName] = userState(null)
// const [userEmail, setUserEmail] = userState(null)

const initialState = {
  userName: null,
  userEmail: null,
};

// We define how we want setUserName and setuserEmail to function with userSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName; // setUserName()
      state.userEmail = action.payload.userEmail; //setuserEmail()
    },
    // When user logs out username and email will be set to null
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

// export setter functions
export const { setActiveUser, setUserLogOutState } = userSlice.actions;

// export getter variabels
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;

export default userSlice.reducer;
