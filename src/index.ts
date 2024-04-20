import { Elysia } from "elysia";
import { usersRoutes } from "./routes/users.routes";

new Elysia()
  .use(usersRoutes)
  .listen(3000);
