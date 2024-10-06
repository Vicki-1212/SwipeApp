import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import JobDisplay from './components/JobDisplay';
import SavedJob from './components/SavedJob';
import DeletedJob from './components/DeletedJob';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobDisplay />} />
          <Route path="/saved-job" element={<SavedJob />} />
          <Route path="/deleted-job" element={<DeletedJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App;
