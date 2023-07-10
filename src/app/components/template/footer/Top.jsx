import Image from 'next/image'
import Link from 'next/link'

export default function Top () {
  return (
    <div className="container py-5">
      <div className="row py-3">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <Image
                width={45}
                height={45}
                src="/img/demos/auto-services/icons/icon-location.svg"
                alt="location"
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}"
              />
            </div>
            <div className="feature-box-info line-height-1 ps-2">
              <span className="d-block font-weight-bold text-color-light text-5 mb-2">
                Address
              </span>
              <p className="text-color-light text-4 line-height-4 font-weight-light mb-0">
                123 Street Name, Los Angeles, CA
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <i className="icons icon-phone text-9 text-color-light position-relative top-4" />
            </div>
            <div className="feature-box-info line-height-1 ps-2">
              <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">
                Call Us Now
              </span>
              <Link
                href="tel:1234567890"
                className="text-color-light text-4 line-height-7 text-decoration-none"
              >
                +123 4567 890
              </Link>
              <span className="text-color-light text-4 px-2">/</span>
              <Link
                href="tel:1234567890"
                className="text-color-light text-4 line-height-7 text-decoration-none"
              >
                +123 4567 890
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <Image
                width={45}
                height={45}
                src="/img/demos/auto-services/icons/car-winch.svg"
                alt=""
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}"
              />
            </div>
            <div className="feature-box-info line-height-1 ps-xl-3">
              <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">
                24/7 Assistance
              </span>
              <Link
                href="tel:1234567890"
                className="text-color-light text-4 line-height-7 text-decoration-none"
              >
                +123 4567 890
              </Link>
              <span className="text-color-light text-4 px-2">/</span>
              <Link
                href="tel:1234567890"
                className="text-color-light text-4 line-height-7 text-decoration-none"
              >
                +123 4567 890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};
