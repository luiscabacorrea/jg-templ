import Image from 'next/image'
import Link from 'next/link'

export default function Products () {
  return (
    <section className="shop section section-height-4 border-0 m-0">
      <div className="container">
        <div className="row justify-content-center pb-3 mb-4">
          <div className="col-lg-8 text-center">
            <div className="overflow-hidden">
              <h2
                className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
                data-appear-animation="maskUp"
                data-appear-animation-delay={250}
              >
                Products For Sale
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
        <div
          className="products row row-gutter-sm mb-4 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={750}
        >
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <div className="product mb-0">
              <div className="product-thumb-info border-0 mb-3">
                <div className="product-thumb-info-badges-wrapper">
                  <span className="badge badge-ecommerce badge-danger">
                    27% OFF
                  </span>
                </div>
                <div className="addtocart-btn-wrapper">
                  <Link
                    href="shop-cart.html"
                    className="text-decoration-none addtocart-btn"
                    title="Add to Cart"
                  >
                    <i className="icons icon-bag" />
                  </Link>
                </div>
                <Link
                  href="ajax/demo-auto-services-product-quick-view.html"
                  className="quick-view text-uppercase font-weight-semibold text-2"
                >
                  QUICK VIEW
                </Link>
                <Link href="shop-product-sidebar-left.html">
                  <div className="product-thumb-info-image bg-light">
                    <Image
                      width={289}
                      height={330}
                      alt=""
                      className="img-fluid"
                      src="/img/demos/auto-services/products/product-1.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link
                    href="#"
                    className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                  >
                    CATEGORY
                  </Link>
                  <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                    <Link href="" className="text-color-dark text-color-hover-primary">
                      Product Short Name
                    </Link>
                  </h3>
                </div>
              </div>
              <div title="Rated 5 out of 5">
                <input
                  type="text"
                  className="d-none"
                  defaultValue={5}
                  title=""
                  data-plugin-star-rating=""
                  data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                />
              </div>
              <p className="price text-5 mb-3">
                <span className="sale text-color-dark font-weight-medium">
                  49,00
                </span>
                <span className="amount">59,00</span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
            <div className="product mb-0">
              <div className="product-thumb-info border-0 mb-3">
                <div className="product-thumb-info-badges-wrapper">
                  <span className="badge badge-ecommerce badge-danger">
                    27% OFF
                  </span>
                </div>
                <div className="addtocart-btn-wrapper">
                  <Link
                    href="shop-cart.html"
                    className="text-decoration-none addtocart-btn"
                    title="Add to Cart"
                  >
                    <i className="icons icon-bag" />
                  </Link>
                </div>
                <Link
                  href="ajax/demo-auto-services-product-quick-view.html"
                  className="quick-view text-uppercase font-weight-semibold text-2"
                >
                  QUICK VIEW
                </Link>
                <Link href="shop-product-sidebar-left.html">
                  <div className="product-thumb-info-image bg-light">
                    <Image
                      width={289}
                      height={330}
                      alt=""
                      className="img-fluid"
                      src="/img/demos/auto-services/products/product-2.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link
                    href="#"
                    className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                  >
                    CATEGORY
                  </Link>
                  <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                    <Link href="" className="text-color-dark text-color-hover-primary">
                      Product Short Name
                    </Link>
                  </h3>
                </div>
              </div>
              <div title="Rated 5 out of 5">
                <input
                  type="text"
                  className="d-none"
                  defaultValue={5}
                  title=""
                  data-plugin-star-rating=""
                  data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                />
              </div>
              <p className="price text-5 mb-3">
                <span className="sale text-color-dark font-weight-medium">
                  49,00
                </span>
                <span className="amount">59,00</span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
            <div className="product mb-0">
              <div className="product-thumb-info border-0 mb-3">
                <div className="product-thumb-info-badges-wrapper">
                  <span className="badge badge-ecommerce badge-danger">
                    27% OFF
                  </span>
                </div>
                <div className="addtocart-btn-wrapper">
                  <Link
                    href="shop-cart.html"
                    className="text-decoration-none addtocart-btn"
                    title="Add to Cart"
                  >
                    <i className="icons icon-bag" />
                  </Link>
                </div>
                <Link
                  href="ajax/demo-auto-services-product-quick-view.html"
                  className="quick-view text-uppercase font-weight-semibold text-2"
                >
                  QUICK VIEW
                </Link>
                <Link href="shop-product-sidebar-left.html">
                  <div className="product-thumb-info-image bg-light">
                    <Image
                      width={289}
                      height={330}
                      alt=""
                      className="img-fluid"
                      src="/img/demos/auto-services/products/product-3.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link
                    href="#"
                    className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                  >
                    CATEGORY
                  </Link>
                  <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                    <Link href="" className="text-color-dark text-color-hover-primary">
                      Product Short Name
                    </Link>
                  </h3>
                </div>
              </div>
              <div title="Rated 5 out of 5">
                <input
                  type="text"
                  className="d-none"
                  defaultValue={5}
                  title=""
                  data-plugin-star-rating=""
                  data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                />
              </div>
              <p className="price text-5 mb-3">
                <span className="sale text-color-dark font-weight-medium">
                  49,00
                </span>
                <span className="amount">59,00</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="product mb-0">
              <div className="product-thumb-info border-0 mb-3">
                <div className="product-thumb-info-badges-wrapper">
                  <span className="badge badge-ecommerce badge-danger">
                    27% OFF
                  </span>
                </div>
                <div className="addtocart-btn-wrapper">
                  <Link
                    href="shop-cart.html"
                    className="text-decoration-none addtocart-btn"
                    title="Add to Cart"
                  >
                    <i className="icons icon-bag" />
                  </Link>
                </div>
                <Link
                  href="ajax/demo-auto-services-product-quick-view.html"
                  className="quick-view text-uppercase font-weight-semibold text-2"
                >
                  QUICK VIEW
                </Link>
                <Link href="shop-product-sidebar-left.html">
                  <div className="product-thumb-info-image bg-light">
                    <Image
                      width={289}
                      height={330}
                      alt=""
                      className="img-fluid"
                      src="/img/demos/auto-services/products/product-4.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link
                    href="#"
                    className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                  >
                    CATEGORY
                  </Link>
                  <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                    <Link href="" className="text-color-dark text-color-hover-primary">
                      Product Short Name
                    </Link>
                  </h3>
                </div>
              </div>
              <div title="Rated 5 out of 5">
                <input
                  type="text"
                  className="d-none"
                  defaultValue={5}
                  title=""
                  data-plugin-star-rating=""
                  data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                />
              </div>
              <p className="price text-5 mb-3">
                <span className="sale text-color-dark font-weight-medium">
                  49,00
                </span>
                <span className="amount">59,00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <Link
              href="demo-auto-services-products.html"
              className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay={800}
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
};
