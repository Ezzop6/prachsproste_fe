import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  path: string;
  btnName: string;
}
const NavButton = ({ path, btnName }: NavButtonProps) => {
  return (
    <Button component={NavLink} to={path}>
      {btnName}
    </Button>
  );
};

export { NavButton };
