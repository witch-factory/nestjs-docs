import { z } from 'zod';

export const createCatSchema = z
  .object({
    name: z.string().min(3).max(30),
    age: z.number().int().positive(),
    breed: z.string().min(3).max(30),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
