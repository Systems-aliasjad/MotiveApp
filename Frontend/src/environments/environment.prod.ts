// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  API_BASE_URL: 'http://10.51.106.150:7001/MOTIVE_APP_SELFCARE/',
  appRoot: '',
  enableLog: true,
  disableConsoleLogs: false,
  About: {
    version: '1.0.0',
    database: '',
    serverName: '',
    publishDate: '09/28/2021',
  },
};
