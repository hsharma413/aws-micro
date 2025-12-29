import { useContext } from "react";
import MicroContext from "../context/MicroContext";

const Gallery = () => {

  const { content } = useContext(MicroContext  );
  const data = content['home']
  console.log(data);
  
  return (
    <section id="gallery" className="gallery-section-micro">
      <div className="padding-global">
        <div className="container-medium">
          <div className="padding-section-small">
            <div className="text-stack-center">
              <h2>{data?.inspiration_gallery_heading}</h2>
              <div className="text-size-medium text-align-center">
               {data?.inspiration_gallery_description}
              </div>
            </div>
            <div className="gallery-wrap">
              <div className="w-layout-grid gallery_grid">
                <a
                  href="#"
                  id="w-node-b892e9c3-263e-50df-e551-eb1e233c25a4-233c2597"
                  className="gallery_thumbnail-wrapper w-inline-block w-lightbox"
                >
                  <div className="gallery_icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0"></path>
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <img
                    sizes="(max-width: 1279px) 90vw, 1024px"
                    srcset="/assets/images/gallery-1.webp 500w, /assets/images/gallery-1.webp 800w"
                    src="../images/seven.jpg"
                    loading="lazy"
                    alt=""
                    className="gallery_image"
                  />
                </a>

                <a
                  href="#"
                  id="w-node-b892e9c3-263e-50df-e551-eb1e233c25a7-233c2597"
                  className="gallery_thumbnail-wrapper w-inline-block w-lightbox"
                >
                  <div className="gallery_icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0"></path>
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <img
                    sizes="(max-width: 1279px) 90vw, 1024px"
                    srcset="/assets/images/gallery-1.webp 500w, /assets/images/gallery-1.webp 800w"
                    src="../images/four.webp"
                    loading="lazy"
                    alt=""
                    className="gallery_image"
                  />
                </a>
                <a
                  href="#"
                  id="w-node-b892e9c3-263e-50df-e551-eb1e233c25aa-233c2597"
                  className="gallery_thumbnail-wrapper w-inline-block w-lightbox"
                >
                  <div className="gallery_icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0"></path>
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <img
                    sizes="(max-width: 1279px) 90vw, 1024px"
                    srcset="/assets/images/gallery-1.webp 500w, /assets/images/gallery-1.webp 800w"
                    src="../images/five.webp"
                    loading="lazy"
                    alt=""
                    className="gallery_image"
                  />
                </a>
                <a
                  href="#"
                  id="w-node-b892e9c3-263e-50df-e551-eb1e233c25ad-233c2597"
                  className="gallery_thumbnail-wrapper w-inline-block w-lightbox"
                >
                  <div className="gallery_icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0"></path>
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <img
                    sizes="(max-width: 1279px) 90vw, 1024px"
                    srcset="/assets/images/gallery-1.webp 500w, /assets/images/gallery-1.webp 800w"
                    src="../images/three.jpg"
                    loading="lazy"
                    alt=""
                    className="gallery_image"
                  />
                </a>
                <a
                  href="#"
                  id="w-node-b892e9c3-263e-50df-e551-eb1e233c25b0-233c2597"
                  className="gallery_thumbnail-wrapper w-inline-block w-lightbox"
                >
                  <div className="gallery_icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewbox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0a2.625 2.625 0 0 1-5.25 0"></path>
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <img
                    sizes="(max-width: 1279px) 90vw, 1024px"
                    srcset="/assets/images/gallery-1.webp 500w, /assets/images/gallery-1.webp 800w"
                    src="../images/three.webp"
                    loading="lazy"
                    alt=""
                    className="gallery_image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
