import "./App.css";

import AvatarGroup from "./components/AvatarGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Custom component from our own components folder */}
        <AvatarGroup />
      </header>
    </div>
  );
}

export default App;
