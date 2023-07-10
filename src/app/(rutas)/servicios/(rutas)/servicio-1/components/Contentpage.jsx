import Image from 'next/image'
import Link from 'next/link'

export default function Contentpage () {
  return (
    <div className="container my-5 pt-4 pb-5">
      <div className="row">
        <div
          className="col-lg-8 order-lg-2 mb-5 mb-lg-0 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={500}
        >
          <p className="text-3-5">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
          <p className="pb-2 mb-4">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-8.jpg"
            className="img-fluid custom-border-radius-1 float-start me-4 mb-4"
            alt=""
          />
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
            ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque
            augue. Aliquam egestas nunc at efficitur faucibus.
          </p>
          <p>
            Praesent mauris eros, tincidunt id enim sodales, rhoncus malesuada
            ligula. Vivamus quis purus nec sapien pellentesque imperdiet. Nullam
            porttitor augue mi, sit amet luctus est tincidunt sed. Donec tempus
            bibendum ex, nec vehicula elit.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-9.jpg"
            className="img-fluid custom-border-radius-1 float-end ms-4 mb-4 mb-sm-0"
            alt=""
          />
          <p className="mt-5 mt-md-0 mt-xl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
            ultricies nunc, eu interdum enim convallis pretium.
          </p>
          <ul className="list list-icons list-icons-style-2 list-icons-lg mb-4 mb-xl-5">
            <li className="font-weight-semibold text-color-dark">
              <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
              Pellentesque ultricies nibh
            </li>
            <li className="font-weight-semibold text-color-dark">
              <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
              Ultricies nibh pellen
            </li>
            <li className="font-weight-semibold text-color-dark">
              <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
              Ultricies nibh pellen
            </li>
            <li className="font-weight-semibold text-color-dark">
              <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
              Pellentesque ultricies nibh
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
            ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque
            augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros,
            tincidunt id enim sodales, rhoncus malesuada ligula. Vivamus quis purus
            nec sapien pellentesque imperdiet. Nullam porttitor augue mi, sit amet
            luctus est tincidunt sed. Donec tempus bibendum ex, nec vehicula elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
            ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque
            augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros,
            tincidunt id enim sodales, rhoncus malesuada ligula. Vivamus quis purus
            nec sapien pellentesque imperdiet. Nullam porttitor augue mi, sit amet
            luctus est tincidunt sed. Donec tempus bibendum ex, nec vehicula elit.
            Nullam porttitor augue mi, sit amet luctus est tincidunt sed. Donec
            tempus bibendum ex, nec vehicula elit.
          </p>
        </div>
        <div
          className="col-lg-4 order-lg-1 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={250}
        >
          <div className="card box-shadow-1 custom-border-radius-1 mb-5">
            <div className="card-body z-index-1 py-4 my-3">
              <h2 className="text-color-dark font-weight-bold text-6 mb-4">
                All Services
              </h2>
              <ul className="custom-nav-list-effect-1 list list-unstyled mb-0">
                <li className="active">
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Brake Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Check Engine
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Suspension Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Transmission Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    A/C Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Oil Change
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Electrical Diagnostics
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Tune Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="demo-auto-services-services-detail.html"
                    className="text-decoration-none text-color-dark text-color-hover-primary text-3-5"
                  >
                    Fuel System Repair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card bg-primary custom-border-radius-1">
            <div className="card-body text-center py-5 my-2">
              <h2 className="text-color-light font-weight-medium text-3 line-height-2 line-height-sm-1 mb-3 pb-1">
                LOOKING FOR HONEST AND RELIABLE SERVICES?
              </h2>
              <h3 className="font-weight-bold text-color-light text-transform-none text-8 line-height-3 mb-3">
                Best Mechanics Downtown Los Angeles CA
              </h3>
              <p className="font-weight-bold text-color-light text-4 opacity-7 mb-5">
                Make An Appointment Today With Our Online Form
              </p>
              <div className="feature-box custom-feature-box-justify-center align-items-center text-start mb-4">
                <div className="feature-box-icon bg-transparent">
                  <i className="icons icon-phone text-8 text-color-light" />
                </div>
                <div className="feature-box-info line-height-2 ps-1">
                  <span className="d-block text-4 font-weight-medium text-color-light mb-1">
                    CALL US NOW
                  </span>
                  <strong className="text-6">
                    <Link
                      href="tel:+1234567890"
                      className="text-color-light text-decoration-none"
                    >
                      +123 4567 890
                    </Link>
                  </strong>
                </div>
              </div>
              <Link
                href="demo-auto-services-appointment.html"
                className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3"
              >
                MAKE AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};
