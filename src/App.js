import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className="App">
      <div className="app-container">
      <Header />
      <AddTask />
      <TaskContainer />
      </div>
    </div>
  );
}

export default App;
