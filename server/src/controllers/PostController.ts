import { Request, Response } from "express";
import knex from "../database/connection";

class PostController {
  async create(req: Request, res: Response) {
    const { id } = req.params;
    const { image, descriptions } = req.body;

    const post = {
      user_id: id,
      image,
      descriptions,
    };

    const createPost = await knex("posts").insert(post);

    return res.json(createPost);
  }

  async index(req: Request, res: Response) {
    const posts = await knex("posts").select("*");

    return res.json(posts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const post = await knex("posts").where("user_id", id).select("*");
    const user = await knex("users").where("id", id).select("*").first();

    return res.json({ user, post });
  }
}

export default PostController;
