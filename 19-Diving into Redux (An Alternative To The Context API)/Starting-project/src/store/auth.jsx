import { createSlice  } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false, };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {//reducer methods are used to update the state
        login(state) { state.isAuthenticated = true; },//old state is automatically provided by redux
        logout(state) { state.isAuthenticated = false; },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
