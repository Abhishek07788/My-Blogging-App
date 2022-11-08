import "./App.css";
import Navbar from "./components/Blogging/Navbar";
import Appcontextprovider from "./components/Private/Appcontextprovider";
import Routing from "./components/router/Routing";

function App() {
  return (
    <div className="App">
      <Appcontextprovider>
        <Navbar />
        <Routing />
      </Appcontextprovider>
    </div>
  );
}

export default App;
