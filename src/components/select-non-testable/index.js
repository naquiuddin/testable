import React, { Component } from 'react';
import ShortId from 'shortid';

export default class SelectNonTestable extends Component {
  handleChange(e) {
    const value = e.target.value;
    const newValueObj = this.props.options.find(
      obj => obj[this.props.valueAttr] === value
    );
    this.props.updateValueObj(newValueObj);
  }
  render() {
    return (
      <div>
        <select
          onChange={e => this.handleChange(e)}
          value={this.props.valueObj[this.props.valueAttr]}
        >
          {this.props.options.map(option => (
            <option
              key={ShortId.generate()}
              value={option[this.props.valueAttr]}
            >
              {option[this.props.textAttr]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
