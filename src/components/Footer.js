import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";
const Footer = () => {
  const {data:{company_name}} = useContext(MicroContext);
  const { page } = useParams(); 

  const { content } = useContext(MicroContext  );
  const data = content['home']
  console.log(data);
  
  return (

    <>
    <div className="section_micro-map-form">
      <div className="w-layout-grid map-form_component">
        <div className="html-embed-6 w-embed w-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d412447.4939156217!2d-115.1574945!3d36.136222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d116c36e9539%3A0x538db69af3794632!2sAnytime%20Garage%20Doors!5e0!3m2!1sen!2sus!4v1686321223187!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form_micro-bottom background-color-secondary">
          <div className="form_header-2 text-align-center">
            <div className="form-header-wrapper">
              <div className="form-header_line-2 heading-style-h3 text-color-white">
                {data?.footer_form_heading}
              </div>
              <div className="form-header_line-3">
               {data?.footer_form_description}
              </div>
            </div>

            <div
              id="form-micro-footer-anytime"
              className="form-block-3 is_footer-open w-form"
            >
              <p>Footer Form should be there</p>
            </div>
          </div>

          <div className="button-wrapper_cta-hero">
            {/* <a href="#" className="button is-alternate w-button">
      Get A Quote
    </a> */}

            <Link
              to={`/${page}/get-a-quote`}
              className="button is-alternate w-button"
            >
              Get A Quote
            </Link>

          </div>
        </div>
      </div>
    </div><footer className="footer_stacked-light">
        <div className="padding-global-3">
          <div className="container-large-3">
            <div className="padding-vertical padding-xxlarge">
              <div className="padding-bottom padding-xlarge">
                <div className="footer7_top-wrapper">
                  <div className="w-layout-grid footer-simple_top-wrapper">
                    <a href="/" className="footer-simple_logo-link w-nav-brand">
                      <img
                        loading="lazy"
                        src="/assets/images/main-logo.png"
                        alt=""
                        className="navbar1_logo-2" />
                    </a>
                    <div className="padding-medium">
                      <div className="w-richtext">
                        <p>
                          <strong>{company_name}</strong>
                          <br />
                        </p>
                        <p>
                          Call us 24 hours a day, 7 days a week! <br />
                        </p>
                      </div>
                    </div>
                    <div className="w-layout-grid footer-simple_link-list">
                      {" "}
                      <div></div>

                      <Link to={`/${page}/why-choose-us`} className="footer-simple_link text-color-black">
                        Why Choose Us
                      </Link>
                      <Link to={`/${page}/financing`} className="footer-simple_link text-color-black">
                        Financing
                      </Link>
                      <Link to={`/${page}/specials`} className="footer-simple_link text-color-black">
                        Special Offers
                      </Link>
                      <Link to={`/${page}/contact-us`} className="footer-simple_link text-color-black">
                        Contact Us
                      </Link>
                      <Link to={`/${page}/get-a-quote`} className="footer-simple_link text-color-black">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-divider-2"></div>
              <p></p>
              <div className="padding-top padding-medium">
                <div className="footer7_bottom-wrapper text-size-tiny">
                  <div className="footer7_credit-text text-size-regular">
                    © 2025 {company_name}, LLC - All rights reserved.
                  </div>
                  <div className="spacer-1-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer></>
  );
};

export default Footer;
