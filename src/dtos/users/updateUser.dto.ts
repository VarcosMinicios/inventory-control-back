import { t } from "elysia";

export const updateUserDto = t.Object({
  email: t.Optional(t.String()),
  name: t.Optional(t.String()),
  password: t.Optional(t.String()),
  email_verified_at: t.Optional(t.Date()),
});
