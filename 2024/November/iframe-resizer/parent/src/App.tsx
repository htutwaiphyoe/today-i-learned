import "./App.css";
import IframeResizer from "@iframe-resizer/react";

function App() {
  return (
    <main className="main">
      <iframe id="child" src="http://localhost:5174/" />
      <IframeResizer license="GPLv3" src="http://localhost:5174/" />
    </main>
  );
}

export default App;
