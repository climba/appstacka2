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
  MDBBtn,
  Fa
} from "mdbreact";

class PortfolioPage extends Component {
  render() {
    return (
      <Container>
        <h1 className="h1-responsive grey-text font-weight-bold my-5 pt-5">
                  My Portfolio{" "}
                  </h1>
            <hr className="grey-text" />
          <h3 className="mt-5 grey-text">Websites I worked on</h3>

          <CardGroup>
            <Card>
              <CardImage
                src="http://www.istpd.com/images/site_grip.jpg"
                alt="The Gripster"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">The Gripster</h4>
                    <p className="font-weight-bold blue-text">Ecommerce - Magento 1.9</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                      The Gripster is a product that I invented. I've been working
                      on it since 2011. I have customers all over the world who use
                      The Gripster to train climbing strength. Its been a fun Project
                      but now I'm craving to become part of team.
                </CardText>
                <MDBBtn 
                  href="https://www.thegripster.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
                <ul className="list-inline py-2">
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg fb-ic">
                          <Fa icon="facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg tw-ic">
                          <Fa icon="youtube" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#!" className="p-2 fa-lg gplus-ic">
                          <Fa icon="instagram" />
                        </a>
                      </li>
                    </ul>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/site_it.jpg"
                alt="The Gripster"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">Industrial Tracker</h4>
                    <p className="font-weight-bold blue-text">Wordpress</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                      Industrial Tracker is a hobby project that I work on from time to
                      time. I'm passionate about solving problems and when I worked in
                      the Industrial Sector I saw many issues around data tracking. I
                      began designing solutions to some of these issues and will release
                      some apps to service industrial sectors at some point.
                </CardText>
                <MDBBtn 
                  href="https://www.industrialtracker.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="../docs/img/content/proj_burg.jpg"
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

          <CardGroup deck className="mt-3">
          <Card>
              <CardImage
                src="../docs/img/content/proj_scrape.jpg"
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
                src="../docs/img/content/game-giphy.jpg"
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
                src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Panel title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="light-blue" size="md">
                  read more
                </Button>
              </CardBody>
            </Card>
          </CardGroup>

      </Container>
    );
  }
}

export default PortfolioPage;
