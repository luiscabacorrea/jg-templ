import Image from 'next/image'
import Link from 'next/link'

export default function Services () {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8 text-center">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              Auto Services
            </h2>
          </div>
          <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={600}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-5 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
        </div>
      </div>
      <div
        className="row row-gutter-sm mb-5 appear-animation"
        data-appear-animation="fadeInUpShorter"
        data-appear-animation-delay={750}
      >
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-lg-0">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Brake Repair
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-lg-0">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Check Engine
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center mb-4 mb-sm-0">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Suspension Repair
              </h3>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3 text-center">
          <Link
            href="demo-auto-services-services-detail.html"
            className="text-decoration-none"
          >
            <div className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
              <div className="thumb-info-wrapper">
                <Image
                  width={289}
                  height={182}
                  src="/img/demos/auto-services/services/service-small-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">
                Transmission Repair
              </h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link
            href="demo-auto-services-services.html"
            className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={850}
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </div>

  )
};
