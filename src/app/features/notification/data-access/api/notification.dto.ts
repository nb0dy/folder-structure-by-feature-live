import { z } from 'zod';

export const notificationSchema = z.object({
  locationId: z.string(),
  deviceId: z.string(),
  id: z.string(),
  title: z.string(),
  message: z.string(),
});

export const notificationsSchema = z.array(notificationSchema);

export type TNotification = z.infer<typeof notificationSchema>;
