import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { Loader, TopBar } from '../../../../shared/ui';
import { routes } from '../../../../shared/utils';
import { useDevices } from '../../data-access';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationId',
    headerName: 'Location ID',
    width: 150,
    renderCell: (cellValues) => <Link to={routes.location.item(cellValues.value)}>{cellValues.value}</Link>,
  },
  {
    field: 'name',
    headerName: 'Device name',
    flex: 1,
    renderCell: (cellValues) => <Link to={routes.device.item(cellValues.row.id)}>{cellValues.value}</Link>,
  },
  {
    field: 'model',
    headerName: 'Device model',
    width: 100,
  },
];

export const DeviceList = () => {
  const devices = useDevices();

  if (devices.isFetching) {
    return (
      <>
        <TopBar>Welcome to Device List!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <TopBar>Welcome to Device List!</TopBar>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={devices.data || []}
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

export default DeviceList;
