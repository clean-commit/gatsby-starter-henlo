import React, {Component} from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class ServiceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      formErrors: {email: '', name: ''},
      emailValid: true,
      nameValid: true,
      formValid: false,
      isSending: false,
      isSend: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.validateField = this.validateField.bind(this)
  }

  handleChange(e) {
    let change = {}
    let name = e.target.name
    let value = e.target.value
    change[name] = value
    this.setState({
      [name]: value
    }, () => this.validateField(name, value))
  }

  clearForm() {
    this.setState({
      email: '',
      name: '',
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? '': " can't be empty";
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      nameValid: nameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  handleFormSubmit(e) {
    e.preventDefault()
    let contactTitle = this.props.formTitle
    if (!this.state.isSending && !this.state.isSend) {
      this.setState({isSending: true});
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": contactTitle, ...this.state })
      })
      .then(() => {
        this.setState({
          isSending: false,
          isSend: true,
        })
        this.clearForm()
      })
      .catch(error => alert(error));
    }
  }

  render() {
    const buttonText = this.state.isSend ? "We'll contact you soon!" : 'Get in touch!'
    const buttonContent = this.state.isSending ? (<div className="loading-dots">
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
    </div>) : buttonText;


    const emailError = !this.state.emailValid ? (<span>Email is invalid</span>) : '';
    return(
      <form onSubmit={this.handleFormSubmit} className={this.props.formClass} name={this.props.formTitle} data-netlify="true">
        <div className="control control-expanded">
          <input className="input" type="email" name="email" placeholder="Your best email&hellip;" value={this.state.email} onChange={this.handleChange} required/>
          { emailError }
        </div>
        <div className="control">
          <button className="btn btn--standard btn--green btn--inline-form" role="submit" disabled={this.state.isSending}>{buttonContent}</button>
        </div>
      </form>
    )
  }

}
