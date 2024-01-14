import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

import { Loader, TopBar } from '../../components';
import { useDevice } from '../../hooks';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationId',
    headerName: 'Location ID',
    width: 150,
  },
  {
    field: 'model',
    headerName: 'Device model',
    width: 100,
  },
  {
    field: 'name',
    headerName: 'Device name',
    flex: 1,
  },
];

export const DeviceDetails = () => {
  const { deviceId } = useParams<{ deviceId: string }>();
  const device = useDevice({ deviceId });

  if (device.isFetching) {
    return (
      <>
        <TopBar>Welcome to Device Details!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <TopBar>Welcome to Device {device.data?.name}!</TopBar>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={device.data ? [device.data] : []}
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
    </div>
  );
};

export default DeviceDetails;
