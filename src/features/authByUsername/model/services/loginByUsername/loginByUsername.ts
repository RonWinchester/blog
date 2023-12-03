import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
	"login/loginByUsername",
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await axios.post<User>("http://localhost:8000/login", {
				username,
				password,
			});
			if (!response.data) {
				throw new Error();
			}
			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data)
			);
			thunkAPI.dispatch(userActions.setAuthData(response.data));
			const closeEvent = new Event("closeModal", { bubbles: true });
			document.dispatchEvent(closeEvent);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
