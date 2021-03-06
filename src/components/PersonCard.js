import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/PersonCard.css';

const EmailComponent = ({ children, email }) => email ? (
  <a href={"mailto:"  + email}>
    {children}
  </a>
) : <div>{children}</div>;


const CVComponent = ({ children, pdf }) => pdf ? (
  <a href={process.env.PUBLIC_URL + "/pdfs/" + pdf} target="_blank">
    {children}
  </a>
) : <div>{children}</div>;

const LinkedInComponent = ({ children, linkedin }) => linkedin ? (
  <a href={linkedin} target="_blank">
    LinkedIn
  </a>
) : <div>{children}</div>;


class PersonCard extends Component {
  
  render() {
    return (
      <div className="card-container">
        <div className="card" id="personCard">
          <div className="side">
            <Image className="card-img-top" src={process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name} height={249} width={249} /></div>
          <div className="card-body">
          <CVComponent pdf={this.props.data.pdf}>
              <h5 className="card-title">
                {this.props.data.name + " " + this.props.data.credentials}
              </h5>
            </CVComponent>
            <h6 className="card-text">{this.props.data.position}</h6>
            <EmailComponent email={this.props.data.email}>
              <p className="card-text">
                {this.props.data.email}
              </p>
            </EmailComponent>
            <p className="card-text">
              {this.props.data.phone}
            </p>
            <LinkedInComponent linkedin={this.props.data.linkedin}>
              <p className="card-text">
                {this.props.data.linkedin}
              </p>
            </LinkedInComponent>
          </div>
        </div>
      </div>
			);
  }
}

export default PersonCard;