const locations = '/api/location';
const location = `${locations}/{locationId}`;

export const paths = {
  LOCATIONS: () => locations,
  LOCATION: ({ locationId }: { locationId?: string }) => location.replace('{locationId}', locationId || ''),
};
