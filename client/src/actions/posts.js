import * as API from "../api";
import { TYPE } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();
    dispatch({ type: TYPE.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await API.createPost(post);
    dispatch({ type: TYPE.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await API.editPost(id, postData);
    dispatch({ type: TYPE.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    await API.removePost(id);
    dispatch({ type: TYPE.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id);
    dispatch({ type: TYPE.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
