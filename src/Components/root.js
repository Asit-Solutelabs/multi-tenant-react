import logo from '../logo.svg';
import '../App.css';

function Root() {
  console.log("location",window.location.hostname?.split(".")[0])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {window.location.hostname?.split(".")[0]}</p>
      </header>
    </div>
  );
}

export default Root;
