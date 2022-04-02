import './App.css';

import { Routes, Route } from 'react-router-dom';

// import { Counter } from './features/counter/Counter';
import User from './features/user/User';
import World from './features/world/World';
import Song from './features/world/Song';
import Submissions from './features/world/Submissions';
import Home from './features/home/Home';
import Discover from './features/discover/Discover';
import Test from './app/components/Test.tsx';

function App() {
  return (
    <div className="App">
      <Test />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/counter" element={<Counter />} /> */}
        <Route path="/users" element={<User />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/worlds/:id" element={<World />} />
        <Route path="/worlds/:id/song" element={<Song />} />
        <Route path="/worlds/:id/submissions" element={<Submissions />} />
      </Routes>
    </div>
  );
}

export default App;
