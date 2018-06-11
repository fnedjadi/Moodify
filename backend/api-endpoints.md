# Moodify Backend API Endpoints

Here is the list of available API endpoints for Moodify:


## `http://localhost:8080/ping`

Debug endpoints. Will always returns 'pong' if the backend server is up.

*Example response:*
```
pong
```

## `http://localhost:8080/moods/get`

Get the list of moods availbe for the user.

*Example response:*
```json
[
    {
        "id": 0,
        "name": "happy",
        "feature": "accoustincess",
        "value": 0
    },
    {
        "id": 1,
        "name": "calm",
        "feature": "accoustincess",
        "value": 1
    },
    {
        "id": 2,
        "name": "sad",
        "feature": "accoustincess",
        "value": 0
    }
]
```

## `http://localhost:8080/userInfo?access_token=<access_token>`

Get all the user data. The `access_token` must be provided as a get query parameter. The `access_token` is a string of random characters and is stored in the user's cookies.

Look at `Moodify\frontend\src\header\menu.js` for an example call.

*Example response:*
```json
{
    "country": "FR",
    "display_name": null,
    "email": "dewolf.val@gmail.com",
    "external_urls": {
        "spotify": "https://open.spotify.com/user/valdewolf"
    },
    "followers": {
        "href": null,
        "total": 10
    },
    "href": "https://api.spotify.com/v1/users/valdewolf",
    "id": "valdewolf",
    "images": [],
    "product": "premium",
    "type": "user",
    "uri": "spotify:user:valdewolf"
}
```

## `http://localhost:8080/moods/playlist?access_token=<access_token>&mood1=<mood_id>` 

Creates a playlist on the user's Spotify Account, containing tracks related to the mood corresponding to the given `mood_id`. The `access_token` is a string of random characters and is stored in the user's cookies.



*Example response:*
```js
// Work in progress
```

## `http://localhost:8080/login`

Redirects to the spotify login page.