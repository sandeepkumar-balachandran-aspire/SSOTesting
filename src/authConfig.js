// authConfig.js
export const msalConfig = {
    auth: {
        clientId: "ff54779d-0063-4688-8f87-8b5d79ddb455", // Your client ID here
        authority: "https://login.microsoftonline.com/42f65d85-0044-4e88-9d17-5aeff505072a", // Your tenant ID here
        redirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};
