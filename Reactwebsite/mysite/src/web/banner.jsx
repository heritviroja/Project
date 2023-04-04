import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="row row-container">
            <div className="col-7 col1">
              <div className="information">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="d-block "
                      src="../img/symbol.png"
                      alt="First slide"
                      width={172}
                      height={62}
                    />
                    <h1 class="u-text u-text-body-alt-color u-title u-text-1">
                      Shop Best Sellers
                    </h1>
                    <a
                      href="#"
                      class="u-btn u-button-style u-custom-font u-font-roboto-condensed u-white u-btn-1"
                    >
                      Shop the collection
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      className="d-block w-100"
                      src="../img/nike1.png"
                      alt="First slide"
                    />
                    <img
                      className="d-block w-100"
                      src="../img/01.png"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 col2"></div>
          </div>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row row-container">
            <div className="col-7 col1">
              <div className="information">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="d-block "
                      src="../img/symbol.png"
                      alt="First slide"
                      width={172}
                      height={62}
                    />
                    <h1 class="u-text u-text-body-alt-color u-title u-text-1">
                      Everything you need to win.
                    </h1>
                    <a
                      href="#"
                      class="u-btn u-button-style u-custom-font u-font-roboto-condensed u-white u-btn-1"
                    >
                      Shop the collection
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      className="d-block w-100"
                      src="../img/nike2.png"
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 col2"></div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;
