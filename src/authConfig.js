// authConfig.js
export const msalConfig = {
    auth: {
        clientId: "YOUR_CLIENT_ID", // Your client ID here
        authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Your tenant ID here
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
