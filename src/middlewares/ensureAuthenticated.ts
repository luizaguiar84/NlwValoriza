import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //receber token
  const authToken = request.headers.authorization;

  //validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");

  try {
    //validar o token
    const { sub } = verify(
      token,
      "ee77baef943ed5ac6fba14f113801374"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
  //recuperar informações de usuário
}
