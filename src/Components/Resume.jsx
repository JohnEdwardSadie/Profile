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

          <a className="btn" href={ResumePDF} download="JohnSadie">Download Full Resume</a>

        <div className="wrapper">


          <section className="columns">

          	<div className="column">
          		<h4>+ Skills & Technologies</h4>
              <h5>Day-To-Day Comfort</h5>
              <p>
                <li>HTML & CSS</li>
                <li>React</li>
                <li>Sketch</li>
                <li>JavaScript</li>
                <li>Swift</li>
                <li>Agile Methodology</li>
                <li>Responsive Design</li>
                <li>Mobile First Thinking</li>
              </p>

              <h5>Experience With</h5>
              <p>
                <li>C</li>
                <li>Python</li>
                <li>PHP</li>
                <li>C++</li>
                <li>Java</li>
                <li>Adobe InDesign</li>
                <li>Adobe Illustrator</li>
              </p>
          	</div>

          	<div className="column">
          		<h4>+ Education</h4>

                <p>
                  <span>Northern Arizona University</span>
                  <span className="ital">Major: Computer Science</span>
                  <span className="ital">Minor: Mathematics</span>
                </p>

              <h4>+ Experience</h4>
              <h5>Salesforce</h5>
                <p>
                  <span>-Front-end Developer for the Lightning Design System</span>
                  <span>-Redesigned and coded internal website using Sketch and React.js</span>
                  <span>-Built Lightning components</span>
                  <h6>May 2017 - Aug 2017</h6>
                  </p>

              <h5>NAU TA</h5>
                <p>
                  <span>-Front-end Developer for the Lightning Design System</span>
                  <span>-Redesigned and coded internal website using Sketch and React.js</span>
                  <span>-Built Lightning components</span>
                  <h6><span>Aug 2016 - May 2017</span></h6>
                  </p>

              <h5>NAU ITS</h5>
                <p>
                  <span>-Front-end Developer for the Lightning Design System</span>
                  <span>-Redesigned and coded internal website using Sketch and React.js</span>
                  <span>-Built Lightning components</span>
                  <h6>Oct 2015 - Aug 2016</h6>
                  </p>




          	</div>

            <div className="column">
              <h4>+ Projects</h4>


              <h5>Technology Query Application</h5>
                <p>
                  <span>-Utilized Eclipse IDE and Apache Maven Integration</span>
                  <span>-I was delegated the project to create a Mac application thatt will be installed in all of the Mac machines in the entirety of the NAU campus</span>
                  <span>-This application allows students to alert ITS of any conflicts, and/or questions about technology.</span>
                  <span>-Used subversion as a revision control system.</span>
                  </p>

                  <h5>Social Discovery Dating Website</h5>
                    <p>
                      <span>-Utilized Ionic Framework, and Facebook API</span>
                      <span>-Had organized weekly team meetings for code reviews, documentation, and functionality testing</span>
                      </p>

                      <h5>RPG Game</h5>
                        <p>
                          <span>-Utilized GitHub to properly document contributions</span>
                          <span>-Used Python to create a builtin HTTP server for localhost builds.</span>
                          <span>-Used Google Hangouts as a means for pair programming, and to have quick responses between the members.</span>
                          </p>


                          <h5>Profile Website</h5>
                            <p>
                              <span>-Utilized React for routing and DOM updates</span>
                              <span>-Housed within github pages.</span>
                              <span>-Created and maintained to act as my personal profile and virtual resume.</span>
                              </p>


          	</div>

          </section>


          </div>



      </div>
    )
  }
}

export default Resume;
