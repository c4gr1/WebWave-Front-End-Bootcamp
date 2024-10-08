import "./App.css";
import ParentComponent from "./components/ParentComponent";
import MessageComponent from "./components/MessageComponent";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <div className="App">
      <h2>First props example</h2>
      <ParentComponent/>

      <h2>Default props example</h2>
      <MessageComponent message = "This is a message"/>

      <MessageComponent/>

      <h2>State Example</h2>

      <CounterComponent/>
    </div>
  );
}

export default App;
