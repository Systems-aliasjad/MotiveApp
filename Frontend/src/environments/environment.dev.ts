// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=dev` then `environment.dev.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_BASE_URL: 'http://10.237.27.145:9402/MOTIVE_SELFCARE_APP/',
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
