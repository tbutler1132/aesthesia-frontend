import './App.css';

import { Routes, Route } from 'react-router-dom';

// import { Counter } from './features/counter/Counter';
import Nav from './components/Nav'
import User from './features/user/User';
import World from './features/world/World';
import Songs from './features/world/Songs';
import Submissions from './features/world/Submissions';
import Home from './features/home/Home';
import Login from './features/home/Login';
import Discover from './features/discover/Discover';
import CurrentSong from './features/world/CurrentSong';

/*
TODO: Fix create comment
  - Debug
TODO: Create submission form
  - POST endpoint for submission
  - Create a form
TODO: New iteration (a submission reached enough votes to become an iteration)
  - PATCH Song
    - Copy current iteration and push it into iterations
    - Copy submission and make it currentIteration
  - When a user votes on a submission, check if it has 5 votes. If so, make the above requests
TODO: A song is voted complete
  - PATCH Album
    - Add current song to songs array
    - Make current song initial template
  - When a user votes complete, check if it has 5 votes. If so, make the above requests
TODO: Auth
TODO: Create world form

!Make a new branch
TODO: File handling
TODO: Spotify
  - Search spotify for songs, add song url to world referenceSongs array

!Make a new branch. So I have version control over styling
TODO: Styling round 1 

TODO: Refactor 1

TODO: Home display worlds
*/

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/counter" element={<Counter />} /> */}
        <Route path="/users" element={<User />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/worlds/:id" element={<World />} />
        <Route path="/worlds/:id/songs" element={<Songs />} />
        <Route path="/worlds/:id/currentSong" element={<CurrentSong />} />
        <Route path="/worlds/:id/submissions" element={<Submissions />} />
      </Routes>
    </div>
  );
}

export default App;
