import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

import { useLocation } from '../../../../shared/data-access/location';
import { Loader, TopBar } from '../../../../shared/ui';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Location name',
    flex: 1,
  },
];

export const LocationDetails = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const location = useLocation({ locationId });

  if (location.isFetching) {
    return (
      <>
        <TopBar>Welcome to Location Details!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <>
      <TopBar>Welcome to Location {location.data?.name}!</TopBar>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={location.data ? [location.data] : []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default LocationDetails;
