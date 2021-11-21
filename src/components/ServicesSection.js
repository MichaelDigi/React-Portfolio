import React from 'react';
import { MdDesktopMac, MdCode, MdGrade } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="A bit more about me" heading="Extra Info" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Education"
            desc="Enrolled in a coding bootcamp at UofT"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="My Skills"
            desc="HTML, CSS, JS, Bootstrap, jQuery, Node, SQL, Mongo, React"
          />
          <ServicesSectionItem
            icon={<MdGrade />}
            title="My Goals"
            desc="Finish the coding boot camp, expand and improve my skills even further on my own, and then get a full time job as a developer  "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
