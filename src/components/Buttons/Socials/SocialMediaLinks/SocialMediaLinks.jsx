import React from 'react';
import SocialLink from '../Sociallink/SocialLink'; //error here why???

// 1. Import your SVG files (adjust paths as necessary)
import InstagramSVG from '../../../../assets/ig.svg';
import GithubSVG from '../../../../assets/github.svg';
import LinkedInSVG from '../../../../assets/LinkedIn.svg';

const SocialMediaLinks = () => {
  // 2. Define the data for your links
  const socialLinks = [
    {
      id: 1,
      href: 'https://www.instagram.com/g.hgall/',
      svgSrc: InstagramSVG,
      altText: 'Instagram',
    },
    {
      id: 2,
      href: 'https://https://github.com/hgall3', // Example GitHub URL
      svgSrc: GithubSVG,
      altText: 'GitHub',
    },
    {
      id: 3,
      href: 'https://www.linkedin.com/in/gabrielagallegosanda/', // Example LinkedIn URL
      svgSrc: LinkedInSVG,
      altText: 'LinkedIn',
    },
  ];

  return (
    <div className="social-media-container">
      {/* 3. Map over the data to render a SocialLink for each item */}
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