import React from 'react';

const SocialLink = ({ href, svgSrc, altText, size = '60px' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${altText} profile`}
      style={{
        display: 'inline-block',
        marginRight: '10px', 
        cursor: 'pointer',
      }}
    >
      <img
        src={svgSrc} 
        alt={altText}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default SocialLink;