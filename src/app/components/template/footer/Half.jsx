import Link from 'next/link'

export default function Half () {
  return (
    <div className="container pb-5">
      <div className="row text-center text-md-start py-4 my-5">
        <div className="col-md-6 col-lg-3 align-self-center text-center text-md-start text-lg-center mb-5 mb-lg-0">
          <Link href="demo-auto-services.html" className="text-decoration-none">
            <img
              src="img/demos/auto-services/logo-light.png"
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            About Us
          </h5>
          <ul className="list list-unstyled">
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">
                ADDRESS
              </span>
              <Link
                href="demo-auto-services-contact.html#get-direction"
                className="text-color-light custom-text-underline-1 font-weight-medium text-3-5"
              >
                GET DIRECTIONS
              </Link>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5 mb-1">
                PHONE
              </span>
              <ul className="list list-unstyled font-weight-light text-3-5 mb-0">
                <li className="text-color-light line-height-3 mb-0">
                  Sales:{' '}
                  <Link
                    href="tel:+1234567890"
                    className="text-decoration-none text-color-light text-color-hover-default"
                  >
                    +123 4567 890
                  </Link>
                </li>
                <li className="text-color-light line-height-3 mb-0">
                  Services:{' '}
                  <Link
                    href="tel:+1234567890"
                    className="text-decoration-none text-color-light text-color-hover-default"
                  >
                    +123 4567 890
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">
                EMAIL
              </span>
              <Link
                href="mailto:mail@example.com"
                className="text-decoration-none font-weight-light text-3-5 text-color-light text-color-hover-default"
              >
                mail@example.com
              </Link>
            </li>
          </ul>
          <ul className="social-icons social-icons-medium">
            <li className="social-icons-instagram">
              <Link
                href="http://www.instagram.com/"
                className="no-footer-css"
                target="_blank"
                title="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li className="social-icons-twitter mx-2">
              <Link
                href="http://www.twitter.com/"
                className="no-footer-css"
                target="_blank"
                title="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="social-icons-facebook">
              <Link
                href="http://www.facebook.com/"
                className="no-footer-css"
                target="_blank"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-2 mb-5 mb-md-0">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            Auto Services
          </h5>
          <ul className="list list-unstyled mb-0">
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">Brake Repair</Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">Check Engine</Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">
                Suspension Repair
              </Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">
                Transmission Repair
              </Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">A/C Repair</Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">Oil Change</Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">
                Electrical Diagnostics
              </Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">Tune Up</Link>
            </li>
            <li className="mb-0">
              <Link href="demo-auto-services-services-detail.html">
                Fuel System Repair
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 offset-lg-1">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            Opening Hours
          </h5>
          <ul className="list list-unstyled list-inline custom-list-style-1 mb-0">
            <li>Mon - Fri: 8:30 am to 5:00 pm</li>
            <li>Saturday: 9:30 am to 1:00 pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>

  )
};
