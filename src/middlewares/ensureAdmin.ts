import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;
  //console.log("user_id", user_id);

  const usersRepository = getCustomRepository(UsersRepositories);

  //verifica se user é admin
  const { admin } = await usersRepository.findOne(user_id);

  if (admin) {
    return next();
  }
  return response.status(401).json({
    error: "Unauthorized",
  });
}
