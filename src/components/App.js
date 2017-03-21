import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
          <div className="content-left">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
