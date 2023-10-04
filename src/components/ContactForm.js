import React, { Component } from 'react';
import css from '../form.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
    } else {
      this.props.onAddContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <p>Phone</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit" className={css.addBtn}>
          Add Contact
        </button>
      </form>
    );
  }
}
