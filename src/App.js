
import './App.css';
import Login from './components/Login';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifywebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifywebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ }, dispatch] = useDataLayerValue();

  // run code based on given condition
  useEffect(() => {
    //code .....
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('🙇', user);
      });
    }
    console.log("I have a token ", token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
            <Login />
          )

      }
    </div>
  );
}

export default App;
