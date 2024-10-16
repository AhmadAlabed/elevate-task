import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MasterLayout = () => {
  return (
    <>
      <div className=" bg-skin-fill">
        <Header />
        <div className=" container mx-auto sm:px-0 px-2 ">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
