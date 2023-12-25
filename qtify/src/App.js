import "./App.css";
import Button from "./Components/Button/Button";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div>
      <Button>Give Feedback</Button>
      <Search placeholder={"Search a album of your choice"} />
    </div>
  );
}

export default App;
