import axios from "axios";

const URL = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const editPost = (id, postData) => axios.patch(`${URL}/${id}`, postData);
export const removePost = (id) => axios.delete(`${URL}/${id}`);
export const likePost = (id) => axios.patch(`${URL}/${id}/like`);