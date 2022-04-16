import './App.css';

import { Routes, Route } from 'react-router-dom';

// import { Counter } from './features/counter/Counter';
import Nav from './components/Nav'
import User from './features/user/User';
import World from './features/world/World.tsx';
import Songs from './features/world/Songs';
import Submissions from './features/world/Submissions';
import Home from './features/home/Home';
import Login from './features/home/Login';
import Discover from './features/discover/Discover.tsx';
import CurrentSong from './features/world/CurrentSong';
import CreateWorld from './features/world/CreateWorld';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/worlds/:id/world" element={<World />} />
        <Route path="/worlds/new" element={<CreateWorld maxReferenceTracks={3} maxReferenceImages={3}/>} />
        <Route path="/worlds/:id/songs" element={<Songs />} />
        <Route path="/worlds/:id/currentSong" element={<CurrentSong />} />
        <Route path="/worlds/:id/submissions" element={<Submissions />} />
      </Routes>
    </div>
  );
}

export default App;
