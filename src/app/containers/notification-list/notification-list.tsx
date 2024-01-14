import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Loader, TopBar } from '../../components';
import { useNotifications } from '../../hooks';
import { routes } from '../../utils';
import { Filters, IFilterForm } from './filters';

const StyledNotificationFeatureNotificationList = styled.div`
  color: pink;
`;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationId',
    headerName: 'Location ID',
    width: 150,
    renderCell: (cellValues) => <Link to={routes.location.item(cellValues.value)}>{cellValues.value}</Link>,
  },
  {
    field: 'deviceId',
    headerName: 'Device ID',
    width: 150,
    renderCell: (cellValues) => <Link to={routes.device.item(cellValues.value)}>{cellValues.value}</Link>,
  },
  {
    field: 'title',
    headerName: 'Notification title',
    width: 150,
    renderCell: (cellValues) => <Link to={routes.notification.item(cellValues.row.id)}>{cellValues.value}</Link>,
  },
  {
    field: 'message',
    headerName: 'Notification message',
    flex: 1,
  },
];

export const NotificationList = () => {
  const [locationId, setLocationId] = useState<string | undefined>(undefined);
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
  const notifications = useNotifications({ filters: { deviceId, locationId } });

  const applyFilters = useCallback(({ locationId, deviceId }: IFilterForm) => {
    setLocationId(locationId);
    setDeviceId(deviceId);
  }, []);

  const clearFilters = useCallback(() => {
    setLocationId(undefined);
    setDeviceId(undefined);
  }, []);

  if (notifications.isFetching) {
    return (
      <>
        <TopBar>Welcome to Notification List!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <StyledNotificationFeatureNotificationList>
      <TopBar>Welcome to Notification List!</TopBar>

      <Filters onSubmit={applyFilters} onClear={clearFilters} locationId={locationId} deviceId={deviceId} />

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={notifications.data || []}
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
    </StyledNotificationFeatureNotificationList>
  );
};

export default NotificationList;
