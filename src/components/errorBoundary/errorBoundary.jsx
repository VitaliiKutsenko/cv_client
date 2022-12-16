import React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundaryStyle } from './errorBoundaryStyle';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,

      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_, errorInfo) {
    const error = errorInfo.componentStack.split('\n').map((info, i) => <p key={i}>{info}</p>);

    this.setState({
      ...this.state,

      errorInfo: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryStyle>
          <summary>Something went wrong.</summary>

          {this.state.errorInfo}
        </ErrorBoundaryStyle>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propType = { props: PropTypes.element };
