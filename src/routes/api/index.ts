import { Router } from 'express';
import PostsController from "../../controllers/PostsController";

const index = Router();

index.post('/api/post', PostsController.createPost);
index.get('/api/posts', PostsController.listPosts);
index.get('/api/post', PostsController.post);
index.put('/api/post/edit', PostsController.editPost);
index.delete('/api/post/delete', PostsController.deletePost);


export default index;
