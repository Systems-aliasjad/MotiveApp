// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  baseHref: '',
  appRoot: 'https://tirs-dev.transre.com/',
  enableLog: true,
  // appRoot: 'https://services.transre.com/',
  disableConsoleLogs: false,
  disableOkta: false,
  okta: {
    Issuer: 'https://transre.oktapreview.com/oauth2/ausn3e7n0lnnz5TUQ0h7',
    RedirectUri: 'https://tirs-dev.transre.com/submission/implicit/callback',
    ClientId: '0oawacsq3d9cBkH5D0h7',
    Pkce: true,
    CurrentUser: 'https://dev-456789.oktapreview.com/api/v1/users/me',
    logoutRedirectUri: 'https://tirs-dev.transre.com',
  },
  About: {
    version: '1.0.2',
    database: 'Dev local',
    serverName: 'Dev Server',
    publishDate: '03/09/2021',
  },
  app_environments: [
    { name: 'dev', url: 'http://tirs.transre.com', active: true },
    {
      name: 'qa',
      url: 'https://qa-secutil-app.azurewebsites.net',
      active: false,
    },
    {
      name: 'prod',
      url: 'https://dev-secutil-app.azurewebsites.net',
      active: false,
    },
  ],
  API_URL: 'https://tirs-dev.transre.com/submissionbackend/api/',
  maxFileSize: 3000000,
  agGridLicenseKey:
    'Transatlantic_Reinsurance_Company_MultiApp_2Devs12_January_2020__MTU3ODc4NzIwMDAwMA==035357f258c569c11d7650001bca05e2',
  impersonateUser: 'mbarua',
};
