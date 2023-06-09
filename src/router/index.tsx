import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DSHDBHPhiNhanThoPage from "../page/HDBHPhiNhanTho";
import TaoMoiHopDong from "../page/TaoMoiHopDong";
import TaoMoiPhuLucHopDong from "../page/TaoMoiPhuLucHD";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "dshbphinhantho",
          element: <DSHDBHPhiNhanThoPage />,
        },
        {
          path: "taomoihopdong",
          element: <TaoMoiHopDong />,
        },
        {
          path: "taomoiphuluchd",
          element: <TaoMoiPhuLucHopDong />,
        },
      ],
    },
  ]);
  return elements;
};
export default Router;
