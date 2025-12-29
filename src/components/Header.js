import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";

const Header = () => {
  const {data:{company_name}} = useContext(MicroContext);
  const { data:{phone_numbers} } = useContext(MicroContext);
  const { page } = useParams();

  return (
    <header className="header-wrapper">
      <div className="sticky-nav_container">
        <div className="sticky-nav_form-header background-color-primary">
          <div>Open 7 Days a Week &amp; Most Holidays</div>
          <div className="stick-nav_cta_button-row">
            <div className="sticky-nav_phone-icon-link">
              <div className="icon-1x1-xxsmall w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a
                href={`tel:+1${phone_numbers?.primary.replaceAll("-", "")}`}
                className="is-phone"
              >
                {phone_numbers?.primary}
              </a>
            </div>
          </div>
        </div>
        <div
          data-animation="default"
          className="navbar4_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="all"
          data-w-id="3c9e0e02-bf3b-00e1-544e-6e086dde200c"
          role="banner"
          data-no-scroll="1"
          data-duration="400"
        >
          <div className="navbar4_container">
            <Link
            to={`${page}`}
              className="navbar4_logo-link w-nav-brand w--current"
            >
             <img
                loading="lazy"
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_sticky-logo"
              />
            </Link>
            {/* <a
              href="#"
              aria-current="page"
            
              aria-label="home"
            >
              <img
                loading="lazy"
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_sticky-logo"
              />
            </a> */}
            <div className="sticky-nav_special-offer">
              <div
                id="form-micro-sticky-anytime"
                className="form-block-2 w-form"
              >
                <p>Sticky Form should be there</p>
              </div>
            </div>
          </div>

          <div className="sidebar_nav-wrapper">
            <nav role="navigation" className="sidebar_menu w-nav-menu">
              <div className="sidebar_menu-wrapper">
                <Link to={`/${page}/why-choose-us`} className="sidebar-menu-link-text">
                  <div>Why Choose Us</div>
                </Link>
                <Link
                  to={`/${page}/financing`}
                  className="sidebar-menu-link-text sidebar_menu-link"
                >
                  <div>Financing</div>
                </Link>
                <Link
                  to={`/${page}/specials`}
                  className="sidebar-menu-link-text sidebar_menu-link"
                >
                  <div>Special Offers</div>
                </Link>
                <Link
                  to={`/${page}/contact-us`}
                  className="sidebar-menu-link-text sidebar_menu-link"
                >
                  <div>Contact&nbsp;Us</div>
                </Link>

                <div className="sidebar_menu-wrapper">
                  <a
                    href={`tel:+1${phone_numbers?.primary.replaceAll("-", "")}`}
                    className="button is-alternate max-width-full w-button"
                  >
                    {phone_numbers?.primary}
                  </a>
                  <div className="rich-company-info-2 text-color-white w-richtext">
                    <p>
                      <strong> {company_name}</strong>
                      <br />
                      Call us 24 hours a day, 7 days a week!
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div
            className="navbar4_menu-button w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="menu-icon4">
              <div className="menu-icon4_wrapper">
                <div className="menu-icon4_line-top background-color-primary"></div>
                <div className="menu-icon4_line-middle">
                  <div className="menu-icon_line-middle-top"></div>
                  <div className="menu-icon_line-middle-base background-color-primary"></div>
                </div>
                <div className="menu-icon4_line-bottom background-color-primary"></div>
              </div>
            </div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
          ></div>
        </div>
      </div>
      <div className="main-nav-container">
        <div className="secondary-nav-container">
          <div className="secondary-nav_menu">
            <div className="sticky-nav_phone-icon-link">
              <div className="icon-1x1-xxsmall w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <a
                href={`tel:+1${phone_numbers?.primary.replaceAll("-", "")}`}
                className="is-phone"
              >
                <strong>{phone_numbers?.primary}</strong>
              </a>
            </div>
          </div>
        </div>
        <div
          data-animation="default"
          className="navbar1_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="medium"
          data-w-id="ee77902e-7afc-dab5-eb2a-0694e7e4ebaf"
          role="banner"
          data-duration="400"
        >
          <div className="navbar1_container">
            <Link
              to={page}
              className="navbar1_logo-link w-nav-brand w--current"
              aria-label="home"
            >
              <img
                src="/assets/images/main-logo.png"
                alt=""
                className="navbar_logo"
              />
            </Link>
            <nav
              role="navigation"
              className="navbar1_menu is-page-height-tablet w-nav-menu"
            >
              <Link to={`/${page}/why-choose-us`} className="navbar1_link w-nav-link">
                Why Choose Us
              </Link>
              <Link to={`/${page}/financing`} className="navbar1_link w-nav-link">
                Financing
              </Link>
              <Link to={`/${page}/specials`} className="navbar1_link w-nav-link">
                Special Offers
              </Link>
              <Link to={`/${page}/contact-us`} className="navbar1_link w-nav-link">
                Contact Us
              </Link>

              <div className="navbar1_menu-buttons">
                <a href="#" className="button is-small mobile-menu w-button">
                  {phone_numbers?.primary}
                </a>
              </div>
            </nav>
            <div
              className="navbar1_menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-1"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="menu-icon1">
                <div className="menu-icon1_line-top"></div>
                <div className="menu-icon1_line-middle">
                  <div className="menu-icon_line-middle-inner"></div>
                </div>
                <div className="menu-icon1_line-bottom"></div>
              </div>
            </div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-1"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
