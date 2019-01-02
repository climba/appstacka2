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
                      The Gripster to train climbing strength. It's been a fun Project
                      but now I'm craving to work as part of a team.
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
                alt="Industrial Tracker"
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
                  href="http://www.industrialtracker.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/site_pi.jpg"
                alt="Petro Industrial"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">Petro Industrial</h4>
                    <p className="font-weight-bold blue-text">Ecommerce - Magento 1.9</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                      Petro Industrial is a provider of industrial tank solutions all
                      over the world. This was an exciting project to manage. I had 
                      to work with the manager for the first part of the project to
                      lock down design specs for all the main pages and the product
                      pages. Once they had signed off I began building them a custom
                      magento theme. I worked with Petro Ind over a period of two years
                </CardText>
                <MDBBtn 
                  href="https://www.petroind.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>

          </CardGroup>

          <CardGroup>
          <Card>
              <CardImage
                src="http://www.istpd.com/images/site_bio.jpg"
                alt="Bio Radiations"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">Bio Radiations</h4>
                    <p className="font-weight-bold blue-text">CMS - Joomla 1.5</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                      Bioradiations is the online magazine for the Bio-Rad Life 
                      Science community. I worked with Bioradiations for over a 
                      year adding new functionality to their joomla CMS site.
                      I built a custom image scroller for their homepage header
                      based off functionality they liked on another joomla site. 
                      I also performed security maintenance on the apache server 
                      and upgraded the joomla CMS core.
                </CardText>
                <MDBBtn 
                  href="http://www.bioradiations.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/site_ce.jpg"
                alt="Concrete Exchange"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">Concrete Exchange</h4>
                    <p className="font-weight-bold blue-text">CMS - Joomla 1.5</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                Concrete Exchange is a pioneer in the decorative concrete
                Industry. They had been stuck in an old java codebase that
                Needed to be recompiled each time a web page was edited.
                It was running on a tomcat server that had to be restarted after
                every change. In 6 months I migrated them over to joomla and
                they were extremely satisfied with their new CMS

                </CardText>
                <MDBBtn 
                  href="http://www.concreteexchange.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.istpd.com/images/site_mace.jpg"
                alt="Mace Security"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
              <h4 className="font-weight-bold mb-3">Mace Security</h4>
                    <p className="font-weight-bold blue-text">Ecommerce - Magento 1.9</p>
                    <hr />
                    <h6 className="font-weight-bold">About the Project</h6>
                <CardText>
                Mace Security International, Inc. is a manufacturer of personal 
                defense products such as the widely recognized Mace Pepper Spray.
                When I arrived at Mace they were in a bad spot. Their old OSCommerce
                site had been hacked and the server was in bad shape. They decided
                to ditch the old server and start a new Magneto site from scratch.
                I was able to clone to old server to a local machine and repair it
                and then export over a thousand skus ind import them into magento
                saving months of tedious work.

                </CardText>
                <MDBBtn 
                  href="https://www.mace.com/" 
                  target="_blank" 
                  color="primary">
                  Visit website
                </MDBBtn>
              </CardBody>
            </Card>
          </CardGroup>

      </Container>
    );
  }
}

export default PortfolioPage;
