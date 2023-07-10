import Link from 'next/link'

export default function Callus () {
  return (
    <section className="section section-height-3 bg-primary border-0 m-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-7 text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="text-color-light font-weight-medium text-3-5 line-height-2 line-height-sm-1 ls-0 mb-2 mb-lg-2">
              LOOKING FOR HONEST AND RELIABLE SERVICES?
            </h2>
            <h3 className="font-weight-bold text-color-light text-transform-none text-8 line-height-2 line-height-lg-1 mb-1">
              Best Mechanics Downtown Los Angeles CA
            </h3>
            <p className="font-weight-bold text-color-light text-4 opacity-7 mb-0">
              Make An Appointment Today With Our Online Form
            </p>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
              <div className="feature-box align-items-center mb-3 mb-lg-0">
                <div className="feature-box-icon bg-transparent">
                  <i className="icons icon-phone text-6 text-color-light" />
                </div>
                <div className="feature-box-info line-height-2 ps-1">
                  <span className="d-block text-1 font-weight-semibold text-color-light mb-1">
                    CALL US NOW
                  </span>
                  <strong className="text-4-5">
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
    </section>
  )
};
