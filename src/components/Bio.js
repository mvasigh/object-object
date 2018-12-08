import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import 'typeface-oswald';

import avatar from './avatar.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    const bioLinks = [
      {
        label: 'Website',
        href: 'https://mvasigh.github.io'
      },
      {
        label: 'Github',
        href: 'https://github.com/mvasigh'
      },
      {
        label: 'Codepen',
        href: 'https://codepen.io/vasighm/'
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mehdi-vasigh/'
      }
    ];

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={avatar}
          alt={`Mehdi Vasigh`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '4px'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start'
          }}
        >
          <span>
            By <strong>Mehdi Vasigh</strong>, Software Developer living in
            Houston, TX
          </span>
          <div>
            {bioLinks.map(link => (
              <a style={{ marginRight: '8px' }} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
