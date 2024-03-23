import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react-native';

// Initialize Auth0Provider
const Auth0ProviderWrapper = ({ children }) => {
  const domain = 'dev-f1rrzjdyeyy62rzh.us.auth0.com';
  const clientId = 'hErfK6dI38DeZAJVvZuMSnXoe1g0dP2W';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={'your-app-redirect-url'}
    >
      {children}
    </Auth0Provider>
  );
};

export { Auth0ProviderWrapper };
