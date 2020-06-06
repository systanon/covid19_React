import React from 'react';
import './Form.scss';

export default class Form extends React.Component {
  state = {
    disabledSabmit: true,
  };

  componentWillMount() {
    const keys = Object.keys(this.props.tamplate);
    const labels = keys.map((key) => {
      return this.props.tamplate[key];
    });
    const inputs = keys.reduce((accum, key) => {
      return Object.assign(accum, { [key]: '' });
    }, {});
    this.setState({ keys, labels, inputs });
  }

  fullValidation = () => {
    let res = 1;
    Object.keys(this.state.inputs).forEach((key) => {
      this.state.inputs[key].length === 0 ? (res *= 0) : (res *= 1);
    });
    return !res ? true : false;
  };

  handleChange = (event) => {
    const oldInputs = this.state.inputs;
    oldInputs[event.target.name] = event.target.value;

    this.setState({ inputs: oldInputs, disabledSabmit: this.fullValidation() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.inputs);
    event.stopPropagation();
  };

  render() {
    const labels = this.state.labels.map((label, index) => {
      return (
        <label key={index}>
          {label + ': '}
          <input
            name={this.state.keys[index]}
            type='text'
            value={this.state.inputs[this.state.keys[index]]}
            onChange={this.handleChange}
          />
        </label>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        {Object.keys(this.props.tamplate).length !== 0 ? (
          <div className='inputsWrapper'>
            {labels}
        {this.state.disabledSabmit ? (
          <p>Поля не должны быть пустыми.</p>
        ) : (
          <p>Поля заполнены.</p>
        )}
            <input
              type='submit'
              value='Send'
              disabled={this.state.disabledSabmit}
            />
            <input type='reset' value='Clear' />
          </div>
        ) : (
          <p>Форма без базы не активна.</p>
        )}

        <input
          className='cancel'
          type='reset'
          value='Close'
          onClick={this.props.closeModalHendler}
        />
      </form>
    );
  }
}
