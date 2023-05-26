import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DSHDBHPhiNhanThoPage from "../page/HDBHPhiNhanTho";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "dshbphinhanthodev",
          element: <DSHDBHPhiNhanThoPage />,
        },
      ],
    },
  ]);
  return elements;
};
export default Router;
