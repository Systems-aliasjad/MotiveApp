// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseHref: '',
  appRoot: 'https://localhost:4200/',
  enableLog: true,
  disableConsoleLogs: false,

  About: {
    version: '1.2.3',
    database: 'Dev local',
    serverName: 'Dev Server',
    publishDate: '8/20/2021',
  },
  app_environments: [
    { name: 'dev', url: '', active: true },
    { name: 'qa', url: '', active: false },
    { name: 'prod', url: '', active: false },
  ],
  API_URL: '',
  maxFileSize: 3000000,
  agGridLicenseKey: '',
  impersonateUser: '',
};
