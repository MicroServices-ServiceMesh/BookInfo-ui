export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:9080/auth',
    realm: 'MicroServices',
    clientId: 'BookInfo-ui',
    credentials: {
      secret: 'eb873931-3a39-4b7f-9e59-2e81ea7fdd5e'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
