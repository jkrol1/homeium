import React from 'react';
import { ReactComponent as LinkedinSVG } from '../../assets/linkedin.svg';
import { ReactComponent as GmailSVG } from '../../assets/gmail.svg';
import { ReactComponent as GithubSVG } from '../../assets/github.svg';
import './Contact.scss';

const ContactPage = () => (
  <main className="ContactPage">
    <h2 className="ContactPage__heading">
      Thank you for checking out my project. I hope you've enjoyed it :)
    </h2>
    <div className="ContactPage__social-medium">
      <div className="icon-container">
        <LinkedinSVG />
      </div>
      <p className="ContactPage__social-medium-id">/jankról</p>
    </div>
    <div className="ContactPage__social-medium">
      <div className="icon-container">
        <GmailSVG />
      </div>
      <p className="ContactPage__social-medium-id">jk.jankrol@gmail.com</p>
    </div>
    <div className="ContactPage__social-medium">
      <div className="icon-container">
        <GithubSVG />
      </div>
      <p className="ContactPage__social-medium-id">/jkrol1</p>
    </div>
  </main>
);

export default ContactPage;
