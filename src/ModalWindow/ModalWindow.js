import React from 'react';
import Form from './../Form/Form.js';
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary.js';
import './ModalWindow.scss';

export default class ModalWindow extends React.Component {
  render() {
    return (
      <div className='overlay' onClick={this.props.onClick}>
        <ErrorBoundary>
          <Form
            {...this.props}
          />
        </ErrorBoundary>
      </div>
    );
  }
}
