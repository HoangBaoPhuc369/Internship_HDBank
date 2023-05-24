import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Router = () => {
  const elements = useRoutes([
    {
      path: "home",
      element: <MainLayout />,
      children: [],
    },
  ]);
  return elements;
};
export default Router;
