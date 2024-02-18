import { Outlet, useLocation } from 'react-router-dom';
import { NavButton } from '../../components/ui/ButtonNavlink';
import { ProjectPaths as PP } from '../ProjectPaths';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

const ProjectLayout = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (location.pathname === PP.PROJECTS) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  return (
    <>
      {showNavbar && (
        <Box sx={{ height: '50px' }}>
          <NavButton path={PP.PROJECT.TRULLO} btnName="Trullo" />
          <NavButton path={PP.PROJECT.TRULLO} btnName="Trullo" />
        </Box>
      )}
      <Outlet />
    </>
  );
};
export { ProjectLayout };
