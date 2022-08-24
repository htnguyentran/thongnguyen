import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import RouteName from './RouteName';

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route element={RouteName.LoginPage.Page} path={RouteName.LoginPage.Path} key={RouteName.LoginPage.Key} />
          <Route element={RouteName.HomePage.Page} path={RouteName.HomePage.Path} key={RouteName.HomePage.Key} />
          <Route element={RouteName.ProductPage.Page} path={RouteName.ProductPage.Path} key={RouteName.ProductPage.Key} />
          <Route element={RouteName.LoginPage.Page} path={'/'} key={RouteName.LoginPage.Key} />
          <Route
            element={RouteName.NotFoundPage.Page}
            path={RouteName.NotFoundPage.Path}
            key={RouteName.NotFoundPage.Key}
          />
          <Route
            element={RouteName.UpdatePasswordPage.Page}
            path={RouteName.UpdatePasswordPage.Path}
            key={RouteName.UpdatePasswordPage.Key}
          />
        </Routes>
    </>
  );
};
export default AppRoutes;
