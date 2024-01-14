import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

import { drawerWidth } from '../utils';

type TTopBarProps = {
  children?: ReactNode;
};

export const TopBar: FC<TTopBarProps> = ({ children }) => {
  return (
    <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
