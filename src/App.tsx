import { Router } from './router/ProjectRouter';
import { DefaultTheme } from './style/DefaultTheme';

const App = () => {
  return (
    <DefaultTheme>
      <Router />
    </DefaultTheme>
  );
};

export { App };
