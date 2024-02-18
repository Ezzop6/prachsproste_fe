import { Box } from '@mui/material';
import { navbar } from '../common/CssConstant';
import { NavButton } from './ui/ButtonNavlink';
import { ProjectPaths as PP } from '../router/ProjectPaths';

const MainNavBar = () => {
  return (
    <Box sx={{ height: navbar.height }}>
      <NavButton path={PP.ROOT} btnName="Home" />
      <NavButton path={PP.PROJECTS} btnName="Projects" />
    </Box>
  );
};

export default MainNavBar;
