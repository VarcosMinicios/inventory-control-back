import { Elysia, t } from "elysia";
import { storeUserDto } from "../dtos/users/storeUser.dto";
import { updateUserDto } from "../dtos/users/updateUser.dto";
import { deleteUser, getUser, listUsers, storeUser, updateUser } from "../services/users.service";

export const usersRoutes = (app: Elysia) => app.group('users', (app) =>
  app
    .post(
      '/',
      async ({ body }) => storeUser(body),
      { body: storeUserDto }
    )
    .get('/', () => listUsers())
    .get(
      '/:id',
      ({ params }) => getUser(params.id),
      { params: t.Object({ id: t.Numeric() }) }
    )
    .put(
      '/:id',
      async ({ body, params }) => updateUser(params.id, body),
      { body: updateUserDto, params: t.Object({ id: t.Numeric() }) }
    )
    .delete(
      '/:id',
      async ({ params }) => deleteUser(params.id),
      { params: t.Object({ id: t.Numeric() }) }
    )
);
