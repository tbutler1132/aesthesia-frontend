import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import User from './features/user/User';
import World from './features/world/World';
import Song from './features/world/Song';
import Submissions from './features/world/Submissions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<User />} />
        <Route path="/worlds/:id" element={<World />} />
        <Route path="/worlds/:id/song" element={<Song />} />
        <Route path="/worlds/:id/submissions" element={<Submissions />} />
      </Routes>
    </div>
  );
}

export default App;
