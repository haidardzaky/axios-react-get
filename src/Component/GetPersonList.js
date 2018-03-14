import React from 'react';

import axios from 'axios';

export default class GetPersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person,i) => <li key={i}>{person.address.street}</li>)}
      </ul>
    )
  }
}
