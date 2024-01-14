// eslint-disable-next-line @softarc/sheriff/dependency-rule
import { Route, Routes } from 'react-router-dom';

import { DeviceDetails } from './containers/device-details';
import { DeviceList } from './containers/device-list';
import { LocationDetails } from './containers/location-details';
import { LocationList } from './containers/location-list';
import { NotificationDetails } from './containers/notification-details';
import { NotificationList } from './containers/notification-list';
import { routes } from './utils';

export const NotLoggedRoutes = () => {
  return (
    <Routes>
      <Route path={routes.location.list.item} element={<LocationDetails />} />
      <Route path={routes.location.list.list} element={<LocationList />} />
      <Route path={routes.device.list.item} element={<DeviceDetails />} />
      <Route path={routes.device.list.list} element={<DeviceList />}></Route>
      <Route path={routes.notification.list.item} element={<NotificationDetails />} />
      <Route path={routes.notification.list.list} element={<NotificationList />}></Route>
    </Routes>
  );
};
