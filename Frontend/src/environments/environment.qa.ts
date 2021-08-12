// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    baseHref: '',
    appRoot: 'https://services.transre.com/',
    disableConsoleLogs: false,
    disableOkta: false,
    okta: {
        Issuer: 'https://transre.oktapreview.com/oauth2/ausn3e7n0lnnz5TUQ0h7',
        RedirectUri: 'https://dev-secutil-app.azurewebsites.net/implicit/callback',
        ClientId: '0oawacsq3d9cBkH5D0h7',
        Pkce: true,
        CurrentUser: 'https://dev-456789.oktapreview.com/api/v1/users/me',
        logoutRedirectUri: 'https://dev-secutil-app.azurewebsites.net'
    },
    About: {
        version: '1.2.3',
        database: 'QA',
        serverName: 'QA Server',
        publishDate: '1/25/2021'
    },
    app_environments: [
        { name: 'dev', url: 'http://localhost:4200', active: false },
        { name: 'qa', url: 'https://qa-secutil-app.azurewebsites.net', active: true },
        { name: 'prod', url: 'https://dev-secutil-app.azurewebsites.net', active: false }
    ],
    API_URL: 'https://poc-secutil-apim.azure-api.net/secutilapi/api/',
    maxFileSize: 3000000,
    agGridLicenseKey: '',
    impersonateUser: 'mbarua',
    enableLog: false
};
