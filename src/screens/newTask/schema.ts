import { object, string } from "yup";
import { msgSchema } from "../../message/messageSchema";

export const schemaNewTask = object({
  task: string()
    .transform((value) => value.trimStart())
    .min(4, msgSchema.min(4))
    .max(30, msgSchema.max(30))
    .required(msgSchema.required),

  description: string()
    .transform((value) => value.trimStart())
    .min(10, msgSchema.min(10))
    .max(150, msgSchema.max(150))
    .required(msgSchema.required),
});
