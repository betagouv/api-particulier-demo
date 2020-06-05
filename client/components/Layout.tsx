import React from "react";
import Link from "next/link";
import logo from "../assets/images/logo-marianne.svg";
import rawLogo from "../assets/images/logo-marianne-brut.png";
import githubIcon from "../assets/images/github-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";

const Layout: React.FunctionComponent = ({ children }) => {
  const authenticated = useSelector((state: RootState) => state.authenticated);
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <header className="navbar fixed" role="navigation">
        <div className="navbar__container">
          <Link href="/">
            <a className="navbar__home flex-1">
              <img
                className="navbar__logo"
                src={logo}
                alt="Logo Marianne avec texte"
              />
              <h1 className="text-2xl">Mairie de Coruscant</h1>
            </a>
          </Link>
          <nav>
            <ul className="nav__links">
              <li className="nav__item">
                <Link href="/faq">
                  <a>Foire aux questions</a>
                </Link>
              </li>
              <li className="nav__item">
                <a href="http://github.com/betagouv/api-particulier-demo">
                  <img className="h-6" src={githubIcon} alt="Icône Github" />
                </a>
              </li>
              {authenticated && (
                <li className="nav__item">
                  <div className="dropdown">
                    Mon profil
                    <div className="dropdown-content p-2">
                      <Link href="/logout">
                        <a>Déconnexion</a>
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div className="pt-40 sm:pt-16">{children}</div>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__logo">
            <img src={rawLogo} alt="Logo Marianne" />
            <p>Mairie de Coruscant</p>
            <ul className="footer__social"></ul>
          </div>
          <ul className="footer__links">
            <li>
              <h2>particulier.api.gouv.fr</h2>
            </li>
            <li>
              <a href="https://api.gouv.fr/api/api-particulier">
                Descriptif api.gouv.fr
              </a>
            </li>
            <li>
              <a href="https://api.gouv.fr/api/api-particulier#doc_tech">
                Documentation technique
              </a>
            </li>
          </ul>
          <ul className="footer__links"></ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
