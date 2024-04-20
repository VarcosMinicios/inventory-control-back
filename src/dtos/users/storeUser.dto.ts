import { t } from "elysia";

export const storeUserDto = t.Object({
  email: t.String(),
  name: t.String(),
  password: t.String(),
});
