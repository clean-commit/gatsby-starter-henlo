import React, { Component } from 'react';


export default class TextField extends Component {
  render() {
    const label = this.props.label ? (<label className="label" htmlFor={this.props.name}>{this.props.label}</label>) : "";
    const error = !this.props.error ? (<span className="control__error">{this.props.errorMessage}</span>) : "";
    return (
      <div className="control control-expanded">
        {label}
        <textarea
          onChange={this.props.onChange}
          name={this.props.name}
          className="textarea"
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
        {error}
      </div>
    )
  }
}
