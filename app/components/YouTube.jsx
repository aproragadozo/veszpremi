var React = require('react');

import ReactPlayer from 'react-player';

import MediaQuery from 'react-responsive';

import 'app/cardmobilecarousel.css';
import 'app/vidmobilecarousel.css';

import styled from 'styled-components';

let loadYT;

class YouTube extends React.Component {

  render () {
    return (
      <ReactPlayer
        url={this.props.url}
        config={{
          youtube: {
            playerVars: {showinfo: 0, modestbranding: 1, rel: 0, frameborder: 0},
            preload: true
          }
        }}/>
    )
  }
}
module.exports = YouTube;