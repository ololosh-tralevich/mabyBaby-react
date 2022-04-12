import { Outlet } from 'react-router-dom';
import HeaderModule from '../../components/HeaderModule/HeaderModule';
import FooterModule from '../../components/FooterModule/FooterModule';

const LayoutPage = () => {
  return (
    <>
      <HeaderModule />
      <Outlet />
      <FooterModule />
    </>
  );
};

export default LayoutPage;
