const LightBox = () => {
  return (
    <div className="custom-lightbox">
      <div className="padding-global">
        <div className="lightbox-container">
          <div className="content-form-wrapper">
            <div className="form-heading-wrap">
              <div className="form-heading-lg">Get a Quote</div>
              <div className="form-heading-md">
                Fill out the form below to learn more.
              </div>
              <div className="form-heading-mobile">
                Reach Out Today to Get Started!
              </div>
            </div>
            <div className="button-wrapper_cta-hero">
              <a
                href="product/get-a-quote.php"
                className="button is-accent w-button"
              >
                Submit
              </a>
            </div>
            <div className="lightbox-sf-form-wrapper">
              <p>Lightbox forms</p>
            </div>
          </div>
          <div id="main-carousel" className="splide">
            <div className="splide__track">
              <div id="lightbox-splide-list" className="splide__list"></div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="lightbox-close-modal_link w-inline-block">
        <div className="icon-sm-primary w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewbox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
};
export default LightBox;
