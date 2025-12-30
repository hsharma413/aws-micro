import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MicroContext from "../context/MicroContext";


const LightBox = () => {

  const { page } = useParams();
  const { content } = useContext(MicroContext);
  const data = content['home']

  return (
    <div class="custom-lightbox">
      <div class="padding-global">
        <div class="lightbox-container">
          <div id="w-node-ccdc8544-524a-99ef-5ffa-aab12bb31edf-0eb35033" class="content-form-wrapper">
            <div class="form-heading-wrap">
              <div class="form-heading-lg">Get a Quote</div>
              <div class="form-heading-md">Fill out the form below to learn more.</div>
              <div class="form-heading-mobile">Reach Out Today to Get Started!</div>
            </div>
            <div class="button-wrapper_cta-hero">

              <Link
                to={`/${page}/get-quote`}
                  className="button is-accent w-button"
              ></Link>
              {/* <a href="product/get-a-quote.php" class="button is-accent w-button">Submit</a> */}
            </div>
            <div class="lightbox-sf-form-wrapper">
                <p>Lightbox forms</p>
            </div>
          </div>
          <div id="main-carousel" class="splide">
            <div class="splide__track">
              <div id="lightbox-splide-list" data-w-id="de4f9a17-380a-f66f-79fc-7d390eb35061" class="splide__list"></div>
            </div>
          </div>
        </div>
      </div>
      <a data-w-id="de4f9a17-380a-f66f-79fc-7d390eb35062" href="#" class="lightbox-close-modal_link w-inline-block">
        <div class="icon-sm-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewbox="0 0 24 24">
            <path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
          </svg></div>
      </a>
    </div>
  );
};
export default LightBox;
