import React, {Component} from 'react';

import InputField from './partials/InputField'
import TextField from './partials/TextField'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      emailValid: true,
      nameValid: true,
      messageValid: true,
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
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'name':
        nameValid = value.length >= 1;
        break;
      case 'message':
        messageValid = value.length >= 1;
        break;
      default:
        break;
    }

    this.setState({
      emailValid: emailValid,
      nameValid: nameValid,
      messageValid: messageValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid});
  }

  handleFormSubmit(e) {
    let contactTitle = this.props.formTitle
    e.preventDefault()
    if (!this.state.isSending && this.state.formValid) {
      this.setState({formValid: this.state.emailValid && this.state.nameValid});
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
        this.clearForm()})
      .catch(error => alert(error));
    }
  }

  render() {
    const contactTitle = this.props.formTitle
    const statusClass = this.state.isSending || this.state.isSend ? "form-container__status form-container__status--active" : 'form-container__status'
    const sendingStatus = !this.state.isSend ? (<div className="loading-dots loading-dots--blue">
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
      <div className="loading-dots--dot"></div>
    </div>) : <h1 className="title-3">Thank you for reaching out! <br/>I'm rushing to reply!</h1>;

    return(
      <form onSubmit={this.handleFormSubmit} className="form-container" name={contactTitle} data-netlify="true">
        <div className={statusClass}>
          {sendingStatus}
        </div>
        <div className="field-grouped">
          <InputField type="text" name='name' placeholder='' label="Full name" onChange={this.handleChange} error={this.state.nameValid} errorMessage="Hey, I prefer to call you by name ;)"/>
        </div>

        <div className="field-grouped">
          <InputField type="email" name="email" placeholder="" label="Email" required={true} onChange={this.handleChange} error={this.state.emailValid} errorMessage="Wow, wow, that doesn't look correct"/>
          <InputField type="tel" name="phone" placeholder="" label="Phone number" onChange={this.handleChange}/>
        </div>

        <div className="field-grouped">
          <InputField type="text" name='firma' placeholder='' label="Company name" onChange={this.handleChange}/>
        </div>

        <TextField name="message" placeholder="Let me know what you need" label="What can I do to upgrade your business?" onChange={this.handleChange} required={true} error={this.state.messageValid} errorMessage="Hmm... it seems like there's nothing I can do..."/>

        <div className="control">
          <button className="btn btn--standard btn--green btn--large" role="submit" disabled={this.state.isSending}>Get in touch!</button>
        </div>
      </form>
    )
  }

}
