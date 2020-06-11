import { Request, Response } from "express";
import knex from "../database/connection";
import crypto from "crypto";

class UserController {
  async create(req: Request, res: Response) {
    const { name, user, email, pass } = req.body;

    const lowerEmail = String(email).toLowerCase();

    const id = crypto.randomBytes(8).toString("hex");

    const saveUser = {
      id,
      name,
      user,
      email: lowerEmail,
      pass,
    };

    const [tableEmail] = await knex("users")
      .where("email", lowerEmail)
      .select("email");

    const [tableUser] = await knex("users").where("user", user).select("user");

    if (tableEmail) {
      return res.json({ error: "Já existe um email cadastrado" });
    }

    if (tableUser) {
      return res.json({ error: "Já existe um usuário cadastrado" });
    }

    await knex("users").insert(saveUser);

    return res.json(saveUser);
  }

  async index(req: Request, res: Response) {
    const users = await knex("users").select("*");

    return res.json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await knex("users").where("id", id).select("*").first();

    return res.json(user);
  }
}

export default UserController;
