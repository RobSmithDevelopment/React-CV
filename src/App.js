// importing the two CV components
import Sidebar from './Sidebar'
import Main from './Main'
import './App.css';
// declaring the two components within the app composing the CV
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
