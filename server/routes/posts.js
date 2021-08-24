import express from 'express'
import { getPosts, createPost, editPost, removePost, likePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', editPost);
router.delete('/:id', removePost);
router.patch('/:id/like', likePost);

export default router;