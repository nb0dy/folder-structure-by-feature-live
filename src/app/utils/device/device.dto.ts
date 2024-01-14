import { z } from 'zod';

export const deviceSchema = z.object({
  locationId: z.string(),
  name: z.string(),
  id: z.string(),
  model: z.string(),
  lastReadingValue: z.number(),
});

export const devicesSchema = z.array(deviceSchema);

export type TDevice = z.infer<typeof deviceSchema>;
