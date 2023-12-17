
import './App.css';
import { useAppSelector } from './hooks/redux';

function App() {
     const {} = useAppSelector(state => state.userReducer)
  return (
    <div className="App">
      wordl
    </div>
  );
}

export default App;
