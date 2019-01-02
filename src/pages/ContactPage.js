import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer className="mt-5">
        
        <h2 className="mb-5">Contact Me</h2>
        <hr className="my-5" />
        <MDBRow className="my-5">
          <MDBCol md="8">
            <form>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <button className="btn btn-outline-warning" type="submit">
                  Send
                  <i className="fa fa-paper-plane-o ml-2" />
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ContactPage;
