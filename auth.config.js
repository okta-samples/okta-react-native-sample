export default {
  oidc: {
    clientId: '${CLI_OKTA_CLIENT_ID}',
    redirectUri: '${CLI_OKTA_REVERSE_DOMAIN}:/callback',
    endSessionRedirectUri: '${CLI_OKTA_REVERSE_DOMAIN}:/callback',
    discoveryUri: '${CLI_OKTA_ISSUER}',
    scopes: ['openid', 'profile', 'offline_access'],
    requireHardwareBackedKeyStore: false,
  },
};
