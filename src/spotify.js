// it is not components all spotify logic exist over here to become easy for us.

export const authEndpoint = "https://accounts.spotify.com/authorize";

{/* click login button */ }
{/* redirect to spotify login page*/ }
{/* Redirect to homopage once logged in*/ }


const redirectUri = "http://localhost:3000/";

const clientId = "e8f70db814e14d2ab8fb706b10847d04"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;