import React, { Component } from "react";
// import Button from "./Button";

class Card extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          users.map((user) => {
            const { username, name, email } = user;
            return (
              <div key={username} className="contact-card">
                <h2>{name}</h2>
                <h6>{username}</h6>
                <a href="mailto:{email}">{email}</a>
                <button className="btn btn-secondary btn-sm m-2">More Info</button>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Card;
