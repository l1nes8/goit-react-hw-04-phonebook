import React, { Component } from 'react';

export default class Filter extends Component {
  handleChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <input
        type="text"
        value={filter}
        onChange={this.handleChange}
        placeholder="Search contacts by name"
      />
    );
  }
}
