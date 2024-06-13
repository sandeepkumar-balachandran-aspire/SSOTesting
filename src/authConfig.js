// authConfig.js
export const msalConfig = {
    auth: {
        clientId: "bc59ab01-8403-45c6-8796-ac3ef710b3e3", // Your client ID here
        authority: "https://login.microsoftonline.com/42f65d85-0044-4e88-9d17-5aeff505072a", // Your tenant ID here
        redirectUri: "https://ashy-rock-0c7224700.5.azurestaticapps.net/",

    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};
