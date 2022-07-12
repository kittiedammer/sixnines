import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";

/*export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>*/
export const login =
  (
    login: string,
    password: string
  ): any =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });

      /*
      ТАК БУДЕТ ПРАВИЛЬНО СТУЧАТЬСЯ В БЕК
      
      const response = await fetch("https://journals-new.netsi.win/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          remember: true
        }),
      });
      
      const data = await response.json();

      А МЫ СДЕЛАЕМ МОК
      */

      const data = {
        first_name: login,
        last_name: 'Тестов'
      }

      setTimeout(() => {}, 500);

      

      const userData = { firstName: data.first_name, lastName: data.last_name };

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });

      localStorage.setItem('userInfo', JSON.stringify(userData));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message.error
            : error.message,
      });
    }
  };

  export const logout =
  (): any =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    dispatch({
        type: USER_LOGOUT
    })

    localStorage.removeItem('userInfo')

    /*
    ОБРАЩЕНИЕ К БЕКУ НА ВЫХОД

    await fetch('http://localhost:8081/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })*/
  }