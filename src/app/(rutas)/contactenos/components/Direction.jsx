export default function Direction () {
  return (
    <section
      id="get-direction"
      className="section bg-light border-0 box-shadow-1 position-relative z-index-1 py-4 m-0"
    >
      <div className="container py-2">
        <div className="row align-items-center justify-content-lg-center justify-content-xl-start">
          <div className="col-lg-3 col-xl-2 offset-xl-1 mb-2 mb-lg-0">
            <h2
              className="text-color-dark font-weight-bold text-4-5 mb-0 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={250}
              data-plugin-options="{'accY': -100}"
            >
              GET DIRECTIONS:
            </h2>
          </div>
          <div className="col-lg-8">
            <form
              className="custom-get-direction-form custom-form-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={500}
              data-plugin-options="{'accY': -100}"
              action=""
              method="post"
            >
              <div className="d-flex align-items-stretch">
                <input
                  type="text"
                  className="custom-get-direction-address form-control w-100"
                  data-msg-required="Please enter Starting Address."
                  name="getDirectionAddress"
                  defaultValue=""
                  placeholder="Enter Your Starting Address"
                  required=""
                />
                <button
                  type="submit"
                  className="btn btn-dark btn-modern font-weight-bold custom-btn-border-radius text-3 btn-px-4 ms-3 my-1"
                  data-loading-text="..."
                >
                  GO
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-11 col-xl-10 offset-xl-1 custom-get-direction-error alert alert-danger d-none mt-4 mx-3 mx-sm-auto">
            <p className="text-center mb-0">
              Theres an error and we couldnt find your address.
              <br />
              <strong className="custom-get-direction-error-message d-none" />
            </p>
          </div>
        </div>
      </div>
    </section>

  )
};
