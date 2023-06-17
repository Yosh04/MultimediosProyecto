import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bond">
      <Container >
        <Row className="mt-3">
          <Col className="text-center">
            <p className="bigger-text">More From Star Wars:</p>
          </Col>
        </Row>
        
        <Row className="item-row-icons">
          <Col className="d-flex justify-content-center align-items-center">
            <a
              class="sm-col"
              href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="iconSize"/>
            </a>

            <a
              class="sm-col"
              href="https://www.instagram.com/starwars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="iconSize"/>
            </a>

            <a
              class="sm-col"
              href="https://twitter.com/starwars"
              target="_blank"
              rel="noopener noreferrer"
            >
            <BsTwitter className="iconSize"/>
            </a>

            <a
              class="sm-col"
              href="https://www.youtube.com/user/starwars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="iconSize"/>
            </a>

            <span className="separator"></span>

            <a
              class="social-icon-kids"
              href="https://www.starwarskids.com/ iconSize"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="bigger-text startTerm">TM & © Lucasfilm Ltd. All Rights Reserved</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="termsColSty">
            <a
              href="https://disneytermsofuse.com/"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
            <span className="s-separator"></span>
            <a
              href="https://support.disney.com/hc/en-us/articles/360000829466-Legal-Notices"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Additional Content Information
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Children's Online Privacy Policy
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your California Privacy Rights
            </a>
            <span className="s-separator"></span>
            <a
              href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star Wars at shopDisney
            </a>
            <span className="s-separator"></span>
            <a
              href="https://support.starwars.com/hc/en-us"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star Wars Helpdesk
            </a>
            <span className="s-separator"></span>
            <a
              href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interest-Based Ads
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
        <Col className="d-flex justify-content-around lastTerm">
        <a
              href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d"
              className="text-white smaller-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Do Not Sell My Personal Information
            </a>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
