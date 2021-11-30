import {loginFailure, loginStart, loginSuccess, logout} from "./userReducer";
import {publicRequest} from "../requestMethod";

export const userLogin = async (dispatch,user) => {
   dispatch(loginStart())

    try {
       const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (e) {
        dispatch(loginFailure())
    }


}