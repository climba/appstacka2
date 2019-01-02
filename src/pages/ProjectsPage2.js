import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText,
  MDBBtn
} from "mdbreact";

class ProjectsPage2 extends Component {
  render() {
    return (
      <Container>
        <h1 className="h1-responsive grey-text font-weight-bold my-5 pt-5">
                  My Projects{" "}
                  </h1>
            <hr className="grey-text" />
          <h3 className="mt-5 grey-text">Projects I worked on</h3>

          <CardGroup>
            <Card>
              <CardImage
                src="http://www.istpd.com/images/proj_share.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">ShareBnB</CardTitle>
                <CardText>
                  An AirBnB clone, built as a team project. Sign in and upload your share space. Rent out your driveway to RV hippies!
                </CardText>
                <MDBBtn 
                  href="https://mysterious-cliffs-66031.herokuapp.com/" 
                  target="_blank" 
                  color="primary">
                  On Heroku
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/ShareBnb"
                  target="_blank"
                  color="default">
                  On GitHub
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/g-historical.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Historical</CardTitle>
                <CardText>
                  An online archive of Historical building's using Google Maps API. You can create tours and map them!
                </CardText>
                <MDBBtn 
                  href="http://www.istpd.com/" 
                  target="_blank" 
                  color="primary">
                  On Server
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/HistoriCal"
                  target="_blank"
                  color="default">
                  On GitHub
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/proj_burg.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Node Express Handlebars Mysql</CardTitle>
                <CardText>
                This application connects to a database, you can add burgers, and move them from one table to another.
                </CardText>
                <MDBBtn 
                  href="https://serene-ocean-80276.herokuapp.com/" 
                  target="_blank" 
                  color="primary">
                  On Heroku
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/Eat_Burgers"
                  target="_blank"
                  color="default">
                  On GitHub
                </MDBBtn>
              </CardBody>
            </Card>
          </CardGroup>

          <CardGroup>
          <Card>
              <CardImage
                src="http://www.istpd.com/images/proj_scrape.jpg"
                alt="Card image cap"
                width="360px"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Node express scrapper application</CardTitle>
                <CardText>
                This application scrapes a climbing route website and adds the data to a mongoDB database. View the routes on one handy page!
                </CardText>
                <MDBBtn 
                  href="https://glacial-brook-38522.herokuapp.com/" 
                  target="_blank" 
                  color="primary">
                  On Heroku
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/route-scrapper"
                  target="_blank"
                  color="default">
                  On GitHub
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/game-giphy.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Node express scrapper application</CardTitle>
                <CardText>
                This application scrapes a climbing route website and adds the data to a mongoDB database. View the routes on one handy page!
                </CardText>
                <MDBBtn 
                  href="https://climba.github.io/Giphy/" 
                  target="_blank" 
                  color="primary">
                  Live
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/Giphy"
                  target="_blank"
                  color="default">
                  Repo
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/game-captain.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">A small JQuery game</CardTitle>
                <CardText>
                This is a small JQuery game. Click the small captain planet images to win!
                </CardText>
                <MDBBtn 
                  href="https://climba.github.io/Captain-Planet-Collector/" 
                  target="_blank" 
                  color="primary">
                  Live
                </MDBBtn>
                <MDBBtn
                  href="https://github.com/climba/Captain-Planet-Collector"
                  target="_blank"
                  color="default">
                  Repo
                </MDBBtn>
              </CardBody>
            </Card>
          </CardGroup>

      </Container>
    );
  }
}

export default ProjectsPage2;
