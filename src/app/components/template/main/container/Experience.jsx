import Image from 'next/image'
import Link from 'next/link'

export default function Experience () {
  return (
    <div className="container my-5 pt-md-4 pt-xl-0">
      <div className="row align-items-center justify-content-center pb-4 mb-5">
        <div className="col-lg-6 pb-sm-4 pb-lg-0 mb-5 mb-lg-0">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={300}
            >
              Twenty Years of Top Experience
            </h2>
          </div>
          <div className="custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={700}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={450}
          >
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
          <p
            className="pb-1 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={700}
          >
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin. Suspendisse hendrerit vehicula
            leo, vel efficitur felis ultrices non.
          </p>
          <div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
            <Link
              href="demo-auto-services-about-us.html"
              className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={950}
            >
              VIEW MORE
            </Link>
            <div
              className="feature-box align-items-center border border-top-0 border-end-0 border-bottom-0 custom-remove-mobile-xs-border-left ms-sm-4 ps-sm-4 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={1200}
            >
              <div className="feature-box-icon bg-transparent">
                <i className="icons icon-phone text-6 text-color-dark" />
              </div>
              <div className="feature-box-info line-height-2 ps-1">
                <span className="d-block text-1 font-weight-semibold text-color-default">
                  CALL US NOW
                </span>
                <strong className="text-4-5">
                  <Link
                    href="tel:+1234567890"
                    className="text-color-dark text-color-hover-primary text-decoration-none"
                  >
                    +123 4567 890
                  </Link>
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-10 col-md-9 col-lg-6 ps-lg-5 pe-5 appear-animation"
          data-appear-animation="fadeInRightShorterPlus"
          data-appear-animation-delay={1450}
          data-plugin-options="{'accY': -200}"
        >
          <div className="position-relative">
            <div
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
            >
              <Image
                width={445}
                height={445}
                src="/img/demos/auto-services/generic-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="position-absolute transform3dxy-n50"
              style={{ top: '25%', left: '7%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 0.5, 'transition': true, 'transitionDuration': 2000, 'isInsideSVG': false}"
              >
                <Image
                  width={35}
                  height={35}
                  src="/img/demos/auto-services/generic-1-1.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInUpShorterPlus"
                  data-appear-animation-delay={1700}
                />
              </div>
            </div>
            <div
              className="position-absolute transform3dxy-n50 ms-5 pb-5 ms-xl-0"
              style={{ top: '32%', left: '85%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 1, 'transition': true, 'transitionDuration': 1500, 'isInsideSVG': false}"
              >
                <Image
                  width={75}
                  height={75}
                  src="/img/demos/auto-services/generic-1-2.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInRightShorterPlus"
                  data-appear-animation-delay={1900}
                />
              </div>
            </div>
            <div
              className="position-absolute transform3dxy-n50"
              style={{ top: '90%', left: '19%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 2, 'transition': true, 'transitionDuration': 2500, 'isInsideSVG': false}"
              >
                <Image
                  width={57}
                  height={57}
                  src="/img/demos/auto-services/generic-1-3.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInDownShorterPlus"
                  data-appear-animation-delay={2100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-2">
        <div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={250}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/checklist.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-3 px-xl-5 my-2">
                Complete Auto Body and Paint Shop
              </h3>
              <p>Lorem ipsum dolor sit a met, consectetur adipiscing elit.</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={500}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/wheel-disk.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-xl-5 my-2 mx-4">
                Free Diagnosis &amp; Brake Checks
              </h3>
              <p>Lorem ipsum dolor sit a met, consectetur adipiscing elit.</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 text-center px-lg-5">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={750}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/car-safe.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-4 px-xl-5 my-2">
                Car Mechanics You Can Trust
              </h3>
              <p>Lorem ipsum dolor sit a met, consectetur adipiscing elit.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
};
