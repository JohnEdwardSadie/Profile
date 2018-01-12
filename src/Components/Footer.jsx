import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer">
          <section>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col">
                  <ul className="list-inline">
                    <a href="https://www.linkedin.com/in/JohnSadie/" target="_blank" title="Linkedin">
                      <i className="fa fa-linkedin fa-3x"></i>
                    </a>
                    <a href="https://github.com/johnedwardsadie" target="_blank" title="Github">
                      <i className="fa fa-github fa-3x"></i>
                    </a>
                    <a href="mailto:johnesadie@gmail.com" target="_blank" title="Say Hi!">
                      <i className="fa fa-envelope-o fa-3x"></i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>


          </section>
          <p className="text-center" title="No steal ples">
              © John Sadie 2018
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
