import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Michael</span>
              </p>
              <h2 className="about__heading">A upcoming Web developer</h2>
              <div className="about__info">
                <PText>
                  I am a 21 year old from Toronto, Canada where I lived all my
                  life.
                  <br /> <br />
                  I started coding in august of 2021 just learning basic HTML
                  and CSS with online courses which is where I gained my
                  interest and decided to enroll in a full time bootcamp to be
                  able to learn full stack webdevelopment at a faster pace.
                  <br />
                  <br />
                  My goals right now are to finish the bootcamp and continue
                  practicing after on my own to increase my skills. Once I feel
                  comfortable and read I hope to get a job as either a front end
                  or backend developer and then maybe in a few years start my
                  own thing as a Freelance developer.
                </PText>
              </div>
              <Button btnText="Download Resume" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['University of Toronto, School of Continuing Studies']}
              />
              <AboutInfoItem
                title="Study"
                items={['Full Stack Web Development Bootcamp']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'SQL', 'MongoDB', 'WebAPIs']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>

              <AboutInfoItem
                title="2021-2022"
                items={['Full stack bootcamp UofT']}
              />
              <AboutInfoItem
                title="2021-Present"
                items={['To be added in the future']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
