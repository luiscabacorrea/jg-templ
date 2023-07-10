import Link from 'next/link'

export default function Faq () {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center pb-3 mb-4">
        <div className="col-lg-9 col-xl-8 text-center">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={650}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-0 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
        </div>
      </div>
      <div className="row row-gutter-sm">
        <div className="col-md-8 col-lg-9 mb-5 mb-md-0">
          <svg
            className="custom-svg-2 overflow-visible"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 185 151"
          >
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.1, 'transition': true, 'transitionDuration': 2000, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={850}
                d="M34.81,102.81L5.18,73.18c-2.13-2.13-2.13-5.59,0-7.72l29.63-29.63c2.13-2.13,5.59-2.13,7.72,0l29.63,29.63
                        c2.13,2.13,2.13,5.59,0,7.72l-29.63,29.63C40.4,104.94,36.94,104.94,34.81,102.81z"
              />
            </g>
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 2500, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={1000}
                d="M92.49,35.35L80.4,23.26c-1.75-1.75-1.75-4.59,0-6.34L92.49,4.83c1.75-1.75,4.59-1.75,6.34,0l12.09,12.09
                        c1.75,1.75,1.75,4.59,0,6.34L98.83,35.35C97.08,37.1,94.24,37.1,92.49,35.35z"
              />
            </g>
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.3, 'transition': true, 'transitionDuration': 3000, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={1150}
                d="M129.88,148.41l-43.21-43.21c-2.13-2.13-2.13-5.59,0-7.72l43.21-43.21c2.13-2.13,5.59-2.13,7.72,0l43.21,43.21
                        c2.13,2.13,2.13,5.59,0,7.72l-43.21,43.21C135.46,150.54,132.01,150.54,129.88,148.41z"
              />
            </g>
          </svg>
          <div
            className="accordion custom-accordion-style-1 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={750}
            id="accordion1"
          >
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingOne">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1One"
                    aria-expanded="false"
                    aria-controls="collapse1One"
                  >
                    1 - Why Choose Porto Auto Services?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1One"
                className="collapse"
                aria-labelledby="collapse1HeadingOne"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Donec tellus massa, tristique sit amet condim vel, facilisis
                    quis sapien. Praesent id enim sit amet odio vulputate eleifend
                    in in tortor. Donec tellus massa, tristique sit amet condim vel,
                    facilisis quis sapien. Praesent id enim sit amet odio vulputate
                    eleifend in in tortor. Donec tellus massa, tristique sit amet
                    condim vel, facilisis quis sapien.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingTwo">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Two"
                    aria-expanded="false"
                    aria-controls="collapse1Two"
                  >
                    2 - Cras a elit sit amet leo accumsan?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Two"
                className="collapse"
                aria-labelledby="collapse1HeadingTwo"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Donec tellus massa, tristique sit amet condim vel, facilisis
                    quis sapien. Praesent id enim sit amet odio vulputate eleifend
                    in in tortor. Donec tellus massa, tristique sit amet condim vel,
                    facilisis quis sapien. Praesent id enim sit amet odio vulputate
                    eleifend in in tortor. Donec tellus massa, tristique sit amet
                    condim vel, facilisis quis sapien.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingThree">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Three"
                    aria-expanded="false"
                    aria-controls="collapse1Three"
                  >
                    3 - Hel officitur felis ultricis nan?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Three"
                className="collapse"
                aria-labelledby="collapse1HeadingThree"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Donec tellus massa, tristique sit amet condim vel, facilisis
                    quis sapien. Praesent id enim sit amet odio vulputate eleifend
                    in in tortor. Donec tellus massa, tristique sit amet condim vel,
                    facilisis quis sapien. Praesent id enim sit amet odio vulputate
                    eleifend in in tortor. Donec tellus massa, tristique sit amet
                    condim vel, facilisis quis sapien.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingFour">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Four"
                    aria-expanded="false"
                    aria-controls="collapse1Four"
                  >
                    4 - Wuspaisse hendreirit vehicula leo?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Four"
                className="collapse"
                aria-labelledby="collapse1HeadingFour"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Donec tellus massa, tristique sit amet condim vel, facilisis
                    quis sapien. Praesent id enim sit amet odio vulputate eleifend
                    in in tortor. Donec tellus massa, tristique sit amet condim vel,
                    facilisis quis sapien. Praesent id enim sit amet odio vulputate
                    eleifend in in tortor. Donec tellus massa, tristique sit amet
                    condim vel, facilisis quis sapien.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingFive">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Five"
                    aria-expanded="false"
                    aria-controls="collapse1Five"
                  >
                    5 - Lintegers aliquet ullamcorper dollor, quis sollic tudin?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Five"
                className="collapse"
                aria-labelledby="collapse1HeadingFive"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Donec tellus massa, tristique sit amet condim vel, facilisis
                    quis sapien. Praesent id enim sit amet odio vulputate eleifend
                    in in tortor. Donec tellus massa, tristique sit amet condim vel,
                    facilisis quis sapien. Praesent id enim sit amet odio vulputate
                    eleifend in in tortor. Donec tellus massa, tristique sit amet
                    condim vel, facilisis quis sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 text-center text-md-start">
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1000}
          >
            <h3 className="font-weight-bold text-color-dark text-transform-none text-5-5 mb-3">
              Our Mission
            </h3>
            <p className="pb-1 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link
              href="demo-auto-services-about-us.html"
              className="btn btn-primary custom-btn-border-radius font-weight-bold btn-px-5 py-3 mb-2"
            >
              VIEW MORE
            </Link>
            <hr className="my-4" />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1100}
          >
            <h3 className="font-weight-bold text-color-dark text-transform-none text-5-5 pt-2 mb-3">
              Any Questions?
            </h3>
            <p className="pb-1 mb-2">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            </p>
            <Link
              href="demo-auto-services-contact.html"
              className="btn btn-primary custom-btn-border-radius font-weight-bold btn-px-5 py-3"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
};
