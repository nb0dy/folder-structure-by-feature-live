const devices = '/api/device';
const device = `${devices}/{deviceId}`;

export const paths = {
  DEVICES: () => devices,
  DEVICE: ({ deviceId }: { deviceId?: string }) => device.replace('{deviceId}', deviceId || ''),
};
