import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
        }
    }
    onMakeOlder() {
        this.setState({ age: this.state.age + 3 });
        console.log(this.age)
    }
    render() {
      return (
          <div>
              <p> In a new content!</p>
              <p>Your name is {this.props.name}</p>
              <p>Your age is {this.state.age}</p>
              <p>status:{this.state.status}</p>
              <p>User obj {this.props.user.name}</p>
              <button className="btn btn-primary" onClick={ this.onMakeOlder.bind(this) }>Make me older</button>
        </div>
    );
  }
}
