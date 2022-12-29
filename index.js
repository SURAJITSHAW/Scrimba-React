// ReactDOM -> global var, we have access to through loading ReactDOM libarary
// rendder() -> is a method which will render any element (jsx) to inside specified element(here root is that element)
ReactDOM.render(<h1>Hello from react</h1>, document.getElementById("root"));

// challenge1 -> render 2 list elements with render() method
ReactDOM.render(
  <ul>
    <li>one</li>
    <li>two</li>
  </ul>,
  document.getElementById("root")
);
