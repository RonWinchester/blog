import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";


export const $axios = axios.create({
	baseURL: __API__,
	withCredentials: true,
	headers: {
		authorization: `${localStorage.getItem(USER_LOCALSTORAGE_KEY)}`
	}
})
