import React from 'react';
import SocialLink from '../Sociallink/SocialLink'; //error here why???
import InstagramSVG from '../../../../assets/ig.svg';
import GithubSVG from '../../../../assets/github.svg';
import LinkedInSVG from '../../../../assets/LinkedIn.svg';
import BehanceSVG from '../../../../assets/behance.svg';

const SocialMediaLinks = () => {
  
  const socialLinks = [
    {
      id: 1,
      href: 'https://www.instagram.com/g.hgall/',
      svgSrc: BehanceSVG,
      altText: 'Behance',
    },
    {
      id: 2,
      href: 'https://https://github.com/hgall3', 
      svgSrc: GithubSVG,
      altText: 'GitHub',
    },
    {
      id: 3,
      href: 'https://www.linkedin.com/in/gabrielagallegosanda/', 
      svgSrc: LinkedInSVG,
      altText: 'LinkedIn',
    },
  ];

  return (
    <div className="social-media-container">
      
      {socialLinks.map((link) => (
        <SocialLink
          key={link.id}
          href={link.href}
          svgSrc={link.svgSrc}
          altText={link.altText}
        />
      ))}
    </div>
  );
};

export default SocialMediaLinks;