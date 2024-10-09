import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import { TaskProvider } from './components/AddTask';
function App() {
  return (
    <TaskProvider>
    <div className="App">
      <div className="app-container">
      <Header />
      <AddTask />
      <TaskContainer />
      </div>
    </div>
    </TaskProvider>
  );
}

export default App;
