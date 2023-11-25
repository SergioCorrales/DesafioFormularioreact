import React from 'react';
import FacebookIcon from '../assets/img/facebook.png';
import GitHubIcon from '../assets/img/github.png';
import LinkedInIcon from '../assets/img/linkedin.png';

const SocialButton = ({ socialMedia }) => {
  let icon;

  
  switch (socialMedia) {
    case 'facebook':
      icon = FacebookIcon;
      break;
    case 'github':
      icon = GitHubIcon;
      break;
    case 'linkedin':
      icon = LinkedInIcon;
      break;
    default:

  }

  return (
    <button className="social-button">
      <img src={icon} alt={`${socialMedia} Icon`} className="social-icon" />
    </button>
  );
};

export default SocialButton;