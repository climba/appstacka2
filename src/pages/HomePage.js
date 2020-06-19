import React from "react";
import { MDBMask, MDBRow, MDBBtn, MDBCol, MDBView, MDBContainer } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-6">
                    Welcome to AppStacka!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    <p>Hello, I’m Mike White and I’m passionate about web development and have been since 2008. AppStacka is a portfolio site I put together to showcase some of the 
                    projects I've been working on latley.</p>
                    <p>After spending a few years working as a full-time web developer for Concrete Exchange and Mace 
                    security I decided to move into freelance work.</p>
                    <p>I then took on contracts with various companies including Bio Radiations, Petro Industrial, 
                    Etched Creative and any more.</p>
                    <p>For a long time, one of my passions was rock climbing. After becoming more and more focused on 
                    climbing I was inspired to create a new type of training tool for climbers, this led me to invent 
                    <MDBBtn
                      target="_blank"
                      href="https://www.thegripster.com/"
                      color="primary">
                      The Gripster
                    </MDBBtn></p>


                  </h6>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5 pt-5">
                  <img
                    src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid pt-5"
                  />
                </MDBCol>
              </MDBRow>              
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12">
            <h6 className="mb-4">
                    <p>My years of web development led me to understand that many companies are competing for a slice of 
                    the pie within a crowded space of saturated industries. I was inspired to create a new product in 
                    a new sector that was not saturated and didn’t have any competitors, yet!</p>
                    <p>I set out to invent a new product that would replace an outdated form of training with a new 
                    dynamic one. Little did I know that I was birthing a new era of training tools for climbing.
                    This process led me on a powerful journey of learning many new skills like 3D scanning, CNC routing, 
                    mold making, casting and 3D printing.</p>
                    <p>After inventing the Gripster and selling it all over the world, many climbers have been inspired to 
                    add their ideas to this new era of climbing training tools.</p>
                    <p>Since building my business and inspiring climbers to create exciting new training tools, I have begun 
                    to see how the next step in my creative journey is in app development. I have returned to the web 
                    development space to begin building the foundations that I need to develop the next generation of 
                    creative solutions.</p>

                  </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
