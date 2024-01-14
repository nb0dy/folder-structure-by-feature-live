// eslint-disable-next-line @softarc/sheriff/dependency-rule
import DevicesIcon from '@mui/icons-material/Devices';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { drawerWidth, routes } from './utils';

const MenuItems = () => {
  return (
    <List>
      <ListItem key="Location list" disablePadding>
        <Link to={routes.location.list.list}>
          <ListItemButton>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="Location list" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem key="Device list" disablePadding>
        <Link to={routes.device.list.list}>
          <ListItemButton>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Device list" />
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem key="Notification list" disablePadding>
        <Link to={routes.notification.list.list}>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notification list" />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
};

type TPermanentDrawerLeftProps = {
  children?: ReactNode;
};

export const FullWidthLayout: FC<TPermanentDrawerLeftProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <MenuItems />
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, mt: 10 }}>
        {children}
      </Box>
    </Box>
  );
};
