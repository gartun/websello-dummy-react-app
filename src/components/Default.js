import { useLocation } from "react-router-dom";

const Default = () => {
  const { pathname } = useLocation();

  return (
    <h2 className="default">Hatalı URL! { pathname } Aradığınız sayfa bulunamadı....</h2>
  );
};

export default Default;
