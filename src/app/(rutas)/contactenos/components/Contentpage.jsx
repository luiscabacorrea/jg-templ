import FormContact from './FormContact'

export default function Contentpage () {
  return (
    <div className="container py-4 my-5">
      <div className="row align-items-center">
        <div className="col-lg-5 col-xl-4 offset-xl-1 mb-5 mb-lg-0">
          <div className="overflow-hidden">
            <h2
              className="text-color-dark font-weight-bold line-height-3 text-5-5 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              123 Street Name, Los Angeles, CA
            </h2>
          </div>
          <div className="overflow-hidden">
            <a
              href="#get-direction"
              data-hash=""
              data-hash-offset={0}
              data-hash-offset-lg={100}
              className="d-inline-block custom-text-underline-1 font-weight-bold border-color-primary text-decoration-none text-3-5 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={500}
            >
              GET DIRECTIONS
            </a>
          </div>
          <ul
            className="list list-unstyled text-color-dark font-weight-bold text-4 py-2 my-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={750}
          >
            <li className="d-flex align-items-center mb-2">
              <i className="icons icon-envelope text-color-dark me-2" />
              Email:
              <a
                href="mailto:porto@domain.com"
                className="text-color-dark text-color-hover-primary text-decoration-none ms-1"
              >
                porto@domain.com
              </a>
            </li>
            <li className="d-flex align-items-center mb-0">
              <i className="icons icon-phone text-color-dark me-2" />
              Phone:
              <a
                href="tel:1234567890"
                className="text-color-dark text-color-hover-primary text-decoration-none ms-1"
              >
                +123 4567 890
              </a>
            </li>
          </ul>
          <p
            className="mb-0 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1000}
          >
            We are here to help you with your auto repair and service needs. Come
            in, give us a call or send us an email. We will get back to you as soon
            as we can during regular business hours.
          </p>
        </div>
        <div
          className="col-lg-6 col-xl-5 offset-lg-1 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={1250}
        >
          <FormContact/>
        </div>
      </div>
    </div>

  )
};
