// App.js
import React, { useEffect, useState } from 'react';
import { PublicClientApplication, InteractionRequiredAuthError } from '@azure/msal-browser';
import { msalConfig, loginRequest } from './authConfig';
import * as microsoftTeams from '@microsoft/teams-js';

const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        microsoftTeams.initialize();

        microsoftTeams.getContext(async (context) => {
            try {
                const accounts = msalInstance.getAllAccounts();
                if (accounts.length > 0) {
                    const response = await msalInstance.ssoSilent({
                        ...loginRequest,
                        loginHint: accounts[0].username
                    });
                    const userProfile = await fetch('https://graph.microsoft.com/v1.0/me', {
                        headers: {
                            'Authorization': `Bearer ${response.accessToken}`
                        }
                    }).then(response => response.json());
                    setUser(userProfile);
                } else {
                    setError('No accounts found');
                }
            } catch (e) {
                if (e instanceof InteractionRequiredAuthError) {
                    setError('Interaction required');
                } else {
                    setError('Silent login failed');
                }
            }
        });
    }, []);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {user ? (
                <div>
                    <h1>Welcome, {user.displayName}</h1>
                    <p>Email: {user.mail}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default App;
