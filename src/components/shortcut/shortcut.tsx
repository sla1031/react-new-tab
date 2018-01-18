import * as React from 'react';

import './shortcut.scss';

interface Props {
  url: string;
  title: string;
  imgSrc: string;
}

export default class Shortcut extends React.Component<Props, {}> {
  render() {
    return (
      <div className="shortcut-container">
        <a
          href={this.props.url}
        >
          <div className="title">
            {this.props.title}
          </div>
          <div className="image">
            <img
              src={this.props.imgSrc}
              alt={this.props.title}
            />
          </div>
        </a>
      </div>
    );
  }
}
