class Football extends React.Component {
  shoot = () => {
    alert(this);
    /*
      The 'this' keyword refers to the component object.
      So the alert will show [object Object].
    */
  };

  render() {
    return <button onClick={this.shoot}>Take the shot!</button>;
  }
}

ReactDOM.render(<Football />, document.getElementById("root"));
