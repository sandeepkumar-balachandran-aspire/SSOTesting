// authConfig.js
export const msalConfig = {
    auth: {
        clientId: "7eb7a16d-20ee-4642-97a0-83444cd5668c", // Your client ID here
        authority: "https://login.microsoftonline.com/42f65d85-0044-4e88-9d17-5aeff505072a", // Your tenant ID here
        redirectUri: "https://ashy-rock-0c7224700.5.azurestaticapps.net/",
"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};
