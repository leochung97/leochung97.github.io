import "../css/App.css";
import Box from "./Box";
import Blackhole from "./Canvas/Blackhole";

function App() {
  setTimeout(() => {
    Blackhole("#blackhole");
  }, 3250);

  return (
    <div className="app">
      <Box></Box>
    </div>
  );
}

export default App;
