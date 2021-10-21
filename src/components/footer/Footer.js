import React from "react";
import { Link } from "react-router-dom";

import { StyledFooter, StyledFooterContainer } from "./styledFooter";

const curYear = new Date().getFullYear();

const Footer = () => (
  <StyledFooter data-testid="footer">
    <StyledFooterContainer>
      <div>
        <Link to="/terms-and-conditions">Kullanım Sözleşmesi</Link>
        <Link to="/money-back">İade Şartları</Link>
        <Link to="/banks">Anlaşmalı Bankalar</Link>
        <Link to="/pay-monthly">Taksit imkânları</Link>
      </div>
      <div>
        <Link to="/categories">Kategoriler</Link>
        <Link to="/bestsellers">En çok satanlar</Link>
        <Link to="/new">Yeni çıkanlar</Link>
      </div>
    </StyledFooterContainer>
    <div className="footer-brand">
      Websello &copy; {curYear === 2021 ? "2021" : "2021-" + curYear}
    </div>
  </StyledFooter>
);

export default Footer;
