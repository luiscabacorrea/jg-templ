export default function Contentpage () {
  return (
    <div className="container my-5 pt-4 pb-5">
      <div className="row mb-3">
        <div className="col">
          <p className="text-3-5">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non. Integer aliquet
            ullamcorper dolor, quis sollicitudin.
          </p>
          <p>
            Quisque efficitur ligula at erat lobortis luctus vitae eget lectus.
            Nullam vel massa bibendum nulla sollicitudin finibus. Etiam tincidunt ut
            turpis vulputate auctor. Cras at enim ac urna fringilla feugiat. Cras
            accumsan metus eget maximus fringilla.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form
            className="contact-form custom-form-style-1"
            action="php/contact-form.php"
            method="POST"
          >
            <div className="contact-form-success alert alert-success d-none mt-4">
              <strong>Success!</strong> Your appointment has been sent to us.
            </div>
            <div className="contact-form-error alert alert-danger d-none mt-4">
              <strong>Error!</strong> There was an error sending your appointment.
              <span className="mail-error-message text-1 d-block" />
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-color-dark font-weight-bold text-4-5 mb-3">
                  Personal Information:
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <input
                  type="text"
                  defaultValue=""
                  data-msg-required="Please enter your first name."
                  maxLength={100}
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  required=""
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <input
                  type="text"
                  defaultValue=""
                  data-msg-required="Please enter your last name."
                  maxLength={100}
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  required=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="form-group col-md-6 mb-3">
                <input
                  type="email"
                  defaultValue=""
                  data-msg-required="Please enter your email address."
                  data-msg-email="Please enter a valid email address."
                  maxLength={100}
                  className="form-control"
                  name="email"
                  id="email"
                  required=""
                  placeholder="E-mail Address"
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <input
                  type="email"
                  defaultValue=""
                  data-msg-required="Please enter your phone."
                  maxLength={100}
                  className="form-control"
                  name="phone"
                  id="phone"
                  required=""
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-color-dark font-weight-bold text-4-5 mb-3">
                  Vehicle Information:
                </h2>
              </div>
            </div>
            <div className="row pb-2 mb-4">
              <div className="form-group col-md-4 mb-md-0">
                <div className="custom-select-1 custom-select-1-arrow-position">
                  <select
                    className="form-select form-control"
                    name="make"
                    data-msg-required="Please select make of vehicle."
                    required=""
                  >
                    <option value="">Make</option>
                    <option value="lorem">LOREM</option>
                    <option value="ipsum">IPSUM</option>
                    <option value="dolor">DOLOR</option>
                    <option value="sit">SIT</option>
                    <option value="met">MET</option>
                  </select>
                </div>
              </div>
              <div className="form-group col-md-4 mb-md-0">
                <input
                  type="text"
                  defaultValue=""
                  data-msg-required="Please enter model of vehicle."
                  maxLength={100}
                  className="form-control"
                  name="model"
                  id="model"
                  required=""
                  placeholder="Model"
                />
              </div>
              <div className="form-group col-md-4 mb-md-0">
                <input
                  type="text"
                  defaultValue=""
                  data-msg-required="Please enter year of vehicle."
                  maxLength={100}
                  className="form-control"
                  name="year"
                  id="year"
                  required=""
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-color-dark font-weight-bold text-4-5 mb-3">
                  Tell Us Your Reason For Shceduling An Appointment:
                </h2>
              </div>
            </div>
            <div className="row mb-3">
              <div className="form-group col">
                <textarea
                  maxLength={5000}
                  data-msg-required="Please enter your reason."
                  rows={10}
                  className="form-control"
                  name="reason"
                  id="reason"
                  required=""
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-color-dark font-weight-bold text-4-5 mb-1">
                  Choose Date and Time:
                </h2>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col">
                    <p className="font-weight-semibold mb-2">FIRST CHOICE</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      defaultValue=""
                      data-msg-required="Please select a date."
                      maxLength={100}
                      className="form-control custom-datepicker"
                      name="firstDate"
                      id="firstDate"
                      required=""
                      placeholder="Date"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      defaultValue=""
                      data-msg-required="Please select a time."
                      maxLength={100}
                      className="form-control custom-timepicker"
                      name="firstTime"
                      id="firstTime"
                      required=""
                      placeholder="Time"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col">
                    <p className="font-weight-semibold mb-2">SECOND CHOICE</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      defaultValue=""
                      data-msg-required="Please select a date."
                      maxLength={100}
                      className="form-control custom-datepicker"
                      name="secondDate"
                      id="secondDate"
                      required=""
                      placeholder="Date"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      defaultValue=""
                      data-msg-required="Please select a time."
                      maxLength={100}
                      className="form-control custom-timepicker"
                      name="secondTime"
                      id="secondTime"
                      required=""
                      placeholder="Time"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-2 mb-4">
              <div className="col">
                <div className="alert alert-warning custom-alert-bg-color-1">
                  <p className="text-2 mb-0">
                    <i className="fas fa-info-circle me-1" /> Please note that the
                    date and time you requested may not be available. We will
                    contact you to confirm your actual appointment details.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col mb-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-modern font-weight-bold custom-btn-border-radius custom-btn-arrow-effect-1 text-3 px-5 py-3"
                  data-loading-text="Loading..."
                >
                  SUBMIT
                  <svg
                    className="ms-2"
                    version="1.1"
                    viewBox="0 0 15.698 8.706"
                    width={17}
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      stroke="#FFF"
                      strokeWidth="0.1"
                      fill="#FFF"
                      points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
};
