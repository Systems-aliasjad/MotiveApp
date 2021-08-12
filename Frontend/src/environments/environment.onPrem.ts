// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    baseHref: 'secutil',
    appRoot: 'https://apps-dev.transre.com/secutil/',
    enableLog: true,
    // appRoot: 'https://services.transre.com/',
    disableConsoleLogs: false,
    // disableOkta: false,
    // okta: {
    //     Issuer: 'https://dev-456789.oktapreview.com/oauth2/default',
    //     RedirectUri: 'https://apps-dev.transre.com/secutil/implicit/callback',
    //     ClientId: '0oagcky4w1Edpg5of0h7',
    //     Pkce: true,
    //     CurrentUser: 'https://dev-456789.oktapreview.com/api/v1/users/me',
    //     logoutRedirectUri: 'https://apps-dev.transre.com/secutil'
    // },
    About: {
        version: '1.2.3',
        database: 'OnPrem',
        serverName: 'Dev Server',
        publishDate: '1/25/2021',
    },
    app_environments: [
        { name: 'dev', url: 'https://apps-dev.transre.com/secutil', active: true },
        { name: 'qa', url: 'https://qa-secutil-app.azurewebsites.net', active: false },
        { name: 'prod', url: 'https://dev-secutil-app.azurewebsites.net', active: false },
    ],
    API_URL: 'https://webapi.transre.com/QAAPI/SecUtilAPI/api/',
    maxFileSize: 3000000,
    agGridLicenseKey: 'Transatlantic_Reinsurance_Company_MultiApp_2Devs12_January_2020__MTU3ODc4NzIwMDAwMA==035357f258c569c11d7650001bca05e2',
    impersonateUser: 'mbarua',
};
