import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ProjectPaths as PP } from './ProjectPaths';

// layouts
import { MainLayout } from './layout/MainLayout';
import { ProjectLayout } from './layout/ProjectLayout';

// index page
import { PageIndex } from '../pages';

// Projects
import { TrulloIndex } from '../pages/TrulloIndex';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path={PP.ROOT} element={<PageIndex />} />
      <Route path={PP.PROJECTS} element={<ProjectLayout />}>
        <Route path={PP.PROJECT.TRULLO} element={<TrulloIndex />} />
      </Route>
    </Route>,
  ),
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
