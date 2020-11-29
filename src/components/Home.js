import React from "react";

export class Home extends React.Component {
    render() {
      console.log(this.props)
      return (
          <div>
              <p> In a new content!</p>
              <p>Your name is {this.props.name}</p>
              <p>User obj {this.props.user.name}</p>
              <div>
                  <h4>Hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby) => {
                          return <li key={ hobby}>{ hobby}</li>
                      })}
                  </ul>
              </div>
        </div>
    );
  }
}
