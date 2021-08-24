import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (request, response) => {
  try {
    const postMessages = await PostMessage.find();
    response.status(200).json(postMessages);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const createPost = async (request, response) => {
  const post = request.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    response.status(201).json(newPost);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const editPost = async (request, response) => {
  const { id: _id } = request.params;
  const post = request.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(404).send("Não existe post com esse id");
  }

  const postUpdated = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  response.json(postUpdated);
};

export const removePost = async (request, response) => {
  const { id: _id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(404).send("Não existe post com esse id");
  }

  await PostMessage.findByIdAndRemove(_id);
  response.json({ message: "Post deletado com sucesso" });
};

export const likePost = async (request, response) => {
  const { id: _id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return response.status(404).send("Não existe post com esse id");
  }

  const post = await PostMessage.findById(_id);
  const postUpdated = await PostMessage.findByIdAndUpdate(
    _id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  response.json(postUpdated)
};
