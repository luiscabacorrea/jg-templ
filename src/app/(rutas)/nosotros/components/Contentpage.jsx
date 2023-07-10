import Image from 'next/image'
import Link from 'next/link'

export default function Contentpage () {
  return (
    <div className="container my-5 pt-4">
      <div className="row align-items-center justify-content-center mb-5">
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
            Quisque efficitur ligula at erat lobortis luctus vitae eget lectus.
            Nullam vel massa bibendum nulla sollicitudin finibus. Etiam tincidunt ut
            turpis vulputate auctor. Cras at enim ac urna fringilla feugiat. Cras
            accumsan metus eget maximus fringilla. Sed sed odio commodo, tristique
            lacus vitae, condimentum neque. Mauris ut nunc vestibulum, malesuada
            orci sed, interdum eros. Proin volutpat, ante non eleifend mattis.
          </p>
          <div className="row">
            <div
              className="col-sm-5 col-lg-4 order-1 appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay={950}
            >
              <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 1
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 2
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 3
                </li>
              </ul>
            </div>
            <div
              className="col-sm-5 col-lg-4 order-3 order-lg-2 appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay={1200}
            >
              <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 4
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 5
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 6
                </li>
              </ul>
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
      <div
        className="lightbox"
        data-plugin-options="{'delegate': 'a', 'type': 'image', 'gallery': {'enabled': true}, 'mainClass': 'mfp-with-zoom', 'zoom': {'enabled': true, 'duration': 300}}"
      >
        <div className="row row-gutter-sm mb-4 mb-lg-5">
          <div
            className="col-sm-4 mb-4 mb-sm-0 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={250}
            data-plugin-options="{'accY': -150}"
          >
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-5.jpg"
            >
              <Image
                width={392}
                height={360}
                className="img-fluid rounded-0"
                src="/img/demos/auto-services/generic/generic-square-5.jpg"
                alt=""
              />
            </Link>
          </div>
          <div
            className="col-sm-4 mb-4 mb-sm-0 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={500}
            data-plugin-options="{'accY': -150}"
          >
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-6.jpg"
            >
              <Image
                width={392}
                height={360}
                className="img-fluid rounded-0"
                src="/img/demos/auto-services/generic/generic-square-6.jpg"
                alt=""
              />
            </Link>
          </div>
          <div
            className="col-sm-4 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={750}
            data-plugin-options="{'accY': -150}"
          >
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-7.jpg"
            >
              <Image
                width={392}
                height={360}
                className="img-fluid rounded-0"
                src="/img/demos/auto-services/generic/generic-square-7.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-lg-9 col-xl-4-5 mb-4 mb-lg-0">
          <p
            className="mb-0 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={1000}
          >
            Phasellus ultrices mollis nulla sed finibus. Nulla gravida felis vel
            orci eleifend sodales. Cras sit amet nisi et nibh aliquet tempor nec
            porttitor leo. Nulla ultrices leo non tellus egestas, nec dignissim ante
            tempor. Aenean sed nisi vulputate, tincidunt felis ut, imperdiet magna.
            Aenean tellus enim, efficitur quis condimentum quis, finibus ut felis.{' '}
          </p>
        </div>
        <div className="col-lg-3 col-xl-1-5">
          <Link
            href="demo-auto-services-services.html"
            className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 w-lg-100pct appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={1250}
          >
            OUR SERVICES
          </Link>
        </div>
      </div>
    </div>

  )
};
