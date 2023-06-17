import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";


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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>

            <a
              class="sm-col"
              href="https://www.instagram.com/starwars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>

            <a
              class="sm-col"
              href="https://twitter.com/starwars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-twitter"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>

            <a
              class="sm-col"
              href="https://www.youtube.com/user/starwars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-youtube"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </a>

            <span className="separator"></span>

            <a
              class=" social-icon-kids"
              href="https://www.starwarskids.com/"
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
            >
              Terms of Use
            </a>
            <span className="s-separator"></span>
            <a
              href="https://support.disney.com/hc/en-us/articles/360000829466-Legal-Notices"
              className="text-white smaller-text"
            >
              Additional Content Information
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/"
              className="text-white smaller-text"
            >
              Privacy Policy
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
              className="text-white smaller-text"
            >
              Children's Online Privacy Policy
            </a>
            <span className="s-separator"></span>
            <a
              href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
              className="text-white smaller-text"
            >
              Your California Privacy Rights
            </a>
            <span className="s-separator"></span>
            <a
              href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"
              className="text-white smaller-text"
            >
              Star Wars at shopDisney
            </a>
            <span className="s-separator"></span>
            <a
              href="https://support.starwars.com/hc/en-us"
              className="text-white smaller-text"
            >
              Star Wars Helpdesk
            </a>
            <span className="s-separator"></span>
            <a
              href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"
              className="text-white smaller-text"
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
