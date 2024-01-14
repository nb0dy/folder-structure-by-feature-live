import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

import { Loader, TopBar } from '../../../../shared/ui';
import { useNotification } from '../../data-access';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationId',
    headerName: 'Location ID',
    width: 150,
  },
  {
    field: 'deviceId',
    headerName: 'Device ID',
    width: 150,
  },
  {
    field: 'title',
    headerName: 'Notification title',
    width: 150,
  },
  {
    field: 'message',
    headerName: 'Notification message',
    flex: 1,
  },
];

export const NotificationDetails = () => {
  const { notificationId } = useParams<{ notificationId: string }>();
  const notification = useNotification({ notificationId });

  if (notification.isFetching) {
    return (
      <>
        <TopBar>Welcome to Notification Details!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <>
      <TopBar>Welcome to Notification {notification.data?.title}!</TopBar>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={notification.data ? [notification.data] : []}
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

export default NotificationDetails;
