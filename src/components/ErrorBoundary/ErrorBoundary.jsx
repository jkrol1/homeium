import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  redirectToMainPage = () => {
    this.props.history.push('/');
    window.location.reload(false);
  };

  render() {
    if (this.state.error) {
      return (
        <div className="ErrorBoundary">
          <img
            className="ErrorBoundary__image"
            src="https://imgur.com/W0sr5AH.png"
            alt="Page not found"
          />
          <CustomButton
            content={<p>Go back to the main page</p>}
            onClick={this.redirectToMainPage}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
