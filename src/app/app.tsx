// eslint-disable-next-line @softarc/sheriff/dependency-rule
import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { FullWidthLayout } from './full-layout';
import { NotLoggedRoutes } from './router';
import { queryClient } from './utils';
import { theme } from './utils';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <FullWidthLayout>
            <NotLoggedRoutes />
          </FullWidthLayout>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
