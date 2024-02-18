import { Outlet } from 'react-router-dom';

import { Paper, Box } from '@mui/material';
import MainNavBar from '../../components/MainNavBar';

const MainLayout = () => {
  return (
    <>
      <MainNavBar />
      <Box>
        <Paper>
          <Outlet />
        </Paper>
      </Box>
    </>
  );
};
export { MainLayout };
