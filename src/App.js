// create your App component here
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.articleText}
      </div>  
    )
  }
}