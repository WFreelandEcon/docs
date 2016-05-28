/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {

  componentDidMount() {
  }

  handleOutboundLinkClick(event) {
    const target = event.currentTarget;
    window.ga('send', 'event', {
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      eventLabel: target.href,
    });
  }

  render() {
    return (
      <footer className="app--footer">
        <div className="app--footer-content ui container">
          <div className="ui stackable grid">
            <a href="http://odoruinu.net/"
              target="_blank"
              onClick={ this.handleOutboundLinkClick }>
              © Takuya Matsuyama
            </a>
            <div className="thirteen wide column right aligned">
              <ul className="links">
                <li>
                  <a href="/terms" onClick={Link.handleClick}>Terms of Use</a>
                </li>
                <li>
                  <a href="/privacy" onClick={Link.handleClick}>Privacy Policy</a>
                </li>
                <li>
                  <a
                    href="https://github.com/inkdropapp/forum"
                    target="_blank"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:inkdrop@pkpk.info"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/inkdrop_app"
                    target="_blank"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@inkdrop"
                    target="_blank"
                    onClick={this.handleOutboundLinkClick}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
