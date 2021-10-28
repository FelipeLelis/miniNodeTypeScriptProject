import {Request, Response} from 'express';
import knex from '../database/connection';
import * as Yup from "yup";

export default {
    async listPosts(request: Request, response: Response): Promise<Response> {
        const {page = 1} = request.query;
        try {
            const posts = await knex('post')
                .limit(10)
                .offset((Number(page) - 1) * 10);
            const [{count}] = await knex('post').count();
            return response.status(200).json({data: posts, total: Number(count)});
        } catch (e){
            return response.status(400).json({ message: "internal error: ", e})
        }
    },

    async createPost(request: Request, response: Response): Promise<Response> {
        const { post } = request.body;
        try {
            const schemaDataPost = Yup.object().shape({
                title: Yup.string().required(),
                body: Yup.string().required(),
                tags: Yup.string().required(),
            });

            post.map(async (data: {
                title: string;
                body: string;
                tags: string;
            }) => {

                let dataPost = {
                    title: data.title,
                    body: data.body,
                    tags: data.tags
                }

                await schemaDataPost.validate(dataPost, {
                    abortEarly: false,
                });

                await knex('post').insert(dataPost, 'id')
            })

            return response
                .status(200)
                .json({message: "Data created successfully"});
        }catch (e) {
            return response.status(400).json({ message: "internal error: ", e})
        }
    },

    async post(request: Request, response: Response): Promise<Response> {
        const id = request.query.id;

        try {
            const post = await knex('post')
                .where("id", "=", `${id}`)
            return response.status(200).json({data: post});
        }catch (e) {
            return response.status(400).json({ message: "internal error: ", e})
        }
    },

    async editPost(request: Request, response: Response): Promise<Response> {
        const { post } = request.body;

        try {
            const schemaDataPost = Yup.object().shape({
                id: Yup.string().required(),
                title: Yup.string().required(),
                body: Yup.string().required(),
                tags: Yup.string().required(),
            });

            post.map(async (data: {
                id: string;
                title: string;
                body: string;
                tags: string;
            }) => {

                let dataPostUpdate = {
                    id: data.id,
                    title: data.title,
                    body: data.body,
                    tags: data.tags
                }

                await schemaDataPost.validate(dataPostUpdate, {
                    abortEarly: false,
                });

                await knex('post')
                    .where('id', '=', dataPostUpdate.id)
                    .update(dataPostUpdate)
            })

            return response
                .status(200)
                .json({message: "Data updated successfully"});
        } catch (e) {
            return response.status(400).json({ message: "internal error: ", e})
        }
    },

    async deletePost(request: Request, response: Response): Promise<Response> {
        const id = request.query.id;
        try {
            await knex('post')
                .where('id', '=', `${id}`)
                .delete()
            return response.status(200).json({message: "Data deleted successfully"});
        } catch (e) {
            return response.status(400).json({ message: "internal error: ", e})
        }
    }
};
