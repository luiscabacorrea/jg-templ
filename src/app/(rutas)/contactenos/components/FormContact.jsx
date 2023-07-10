'use client'
import { useRef } from 'react'
import { sendMail } from '@/app/services/api/send.email'

export default function FormContact () {
  const formRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: '3101112233',
      description: formData.get('message')
    }
    console.log(data)
    sendMail(data).then(response => console.log(response))
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form custom-form-style-1"
      action="php/contact-form.php"
      method="POST"
    >
      <div className="contact-form-success alert alert-success d-none mt-4">
        <strong>Success!</strong> Your message has been sent to us.
      </div>
      <div className="contact-form-error alert alert-danger d-none mt-4">
        <strong>Error!</strong> There was an error sending your message.
        <span className="mail-error-message text-1 d-block" />
      </div>
      <div className="row row-gutter-sm">
        <div className="form-group col mb-3">
          <input
            type="text"
            defaultValue=""
            data-msg-required="Please enter your name."
            maxLength={100}
            className="form-control"
            name="name"
            id="name"
            required=""
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="row row-gutter-sm">
        <div className="form-group col mb-3">
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
      </div>
      <div className="row">
        <div className="form-group col mb-3">
          <textarea
            maxLength={5000}
            data-msg-required="Please enter your message."
            rows={4}
            className="form-control"
            name="message"
            id="message"
            required=""
            placeholder="Message"
            defaultValue={''}
          />
        </div>
      </div>
      <div
        className="row appear-animation"
        data-appear-animation="fadeInUpShorterPlus"
        data-appear-animation-delay={1500}
      >
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
  )
};
