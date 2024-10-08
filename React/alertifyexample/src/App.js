import './App.css';
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css"

function App() {

  function showAlert(){
    alertify.alert("This is a alert.");
  }

  function showConfirm(){
    alertify.confirm("Dou you confirm ? ",
    function(){
      alertify.success("Confirmed");
    }, function(){
      alertify.error("Cancelled");
    });
  }

  function showPrompt(){
    alertify.prompt("Enter your name:", "", function(evt,value){
      alertify.success("Merhaba, " + value );
    },
    function(){
      alertify.error("Cancelled");
    });
  }

  function showLog(){
    alertify.success("This is a success message");
    alertify.error("This is a error message");
  }

  return (
    <div className="App">
      <h1>Alertifyjs Example</h1>
      <button onClick={showAlert}>Show Alert</button>
      <button onClick={showConfirm}>Show Confirm</button>
      <button onClick={showPrompt}>Show Message</button>
      <button onClick={showLog}>Show Log Message</button>

    </div>
  );
}

export default App;
