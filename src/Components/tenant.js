
import '../App.css';

function Tenant() {
  console.log("location",window.location.hostname?.split(".")[0])
  return (
    <div className="App">
        <p>Hello {window.location.hostname?.split(".")[0]}</p>
    </div>
  );
}

export default Tenant;