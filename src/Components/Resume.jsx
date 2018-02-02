import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ResumePDF from './JohnSadie.pdf';
import Title from './Title.jsx';
import resume from './resume.png';

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber } = this.state;
    return (
      <div>
        <Title
          illus={resume}
          title="My Resume"
          />

        <div className="container">
          <a className="btn" href={ResumePDF} download="JohnSadie">Download Full Resume</a>
    <div className="row">
      <div className="col">
        <div className="nonMobile">
        </div>
        <div className="Mobile">
          <a className="btn" href={ResumePDF} download="JohnSadie">View Resume</a>
        </div>
        <div>
          <Document
            file={ResumePDF}
            onLoadSuccess={this.onDocumentLoad}
            className="resume"
          >
          <Page
            pageNumber={pageNumber}
            width="960"
          />
          </Document>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default Resume;
