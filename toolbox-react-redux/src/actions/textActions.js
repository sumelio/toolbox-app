import axios from "axios";
import { SET_TEXT, START_LOADING, SET_ERROR } from "../types/textTypes";
import { BACKEND_URL } from "../constant/url";

export const sendText = name => async dispatch => {
  try {
    dispatch({
      type: START_LOADING,
      payload: true
    });

    const response = await axios({
      method: "post",
      url: BACKEND_URL,
      timeout: 300,
      headers: {},
      data: {
        text: name
      }
    });
    dispatch({
      type: SET_TEXT,
      payload: response.data.input
    });
  } catch (error) {
    console.log( `Houston we have a problem: ${error.message}`, error);
    dispatch({
      type: SET_ERROR,
      payload: 'Sorry, please try again later.'
    });
  }
};
