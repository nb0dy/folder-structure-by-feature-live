import { z } from 'zod';

export const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
});

export const locationsSchema = z.array(locationSchema);

export type TLocation = z.infer<typeof locationSchema>;
