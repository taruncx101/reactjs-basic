import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }
    onMakeOlder() {
        this.age += 3
        console.log(this.age)
    }
    render() {
      return (
          <div>
              <p> In a new content!</p>
              <p>Your name is {this.props.name}</p>
              <p>Your age is {this.age}</p>
              <p>User obj {this.props.user.name}</p>
              <div>
                  <h4>Hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby) => {
                          return <li key={ hobby}>{ hobby}</li>
                      })}
                  </ul>
              </div>
              <button className="btn btn-primary" onClick={ this.onMakeOlder.bind(this) }>Make me order</button>
        </div>
    );
  }
}
