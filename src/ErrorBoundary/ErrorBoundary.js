import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (err, info) => {
    this.setState({
      hasError: true,
      errorMessage: err
    })
  }

  render() {
    if(this.state.hasError) {
      return( 
        <React.Fragment>
          <h1>Something went wrong!</h1>
          <h3>{this.state.errorMessage}</h3>
        </React.Fragment>
      )
    } else {
      return this.props.children
    }
  }
}
