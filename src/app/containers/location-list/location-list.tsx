import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { Loader, TopBar } from '../../components';
import { useLocations } from '../../hooks';
import { routes } from '../../utils';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Location name',
    flex: 1,
    renderCell: (cellValues) => <Link to={routes.location.item(cellValues.row.id)}>{cellValues.value}</Link>,
  },
];

export const LocationList = () => {
  const locations = useLocations();

  if (locations.isFetching) {
    return (
      <>
        <TopBar>Welcome to Location List!</TopBar>
        <Loader />
      </>
    );
  }

  return (
    <>
      <TopBar>Welcome to Location List!</TopBar>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={locations.data || []}
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

export default LocationList;
