import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (typeof (window as any).TextEncoder === 'undefined') {
  (window as any).TextEncoder = TextEncoder;
}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// if (environment.production) {
//     enableProdMode();
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//     platformBrowserDynamic()
//         .bootstrapModule(AppModule)
//         .catch((err) => console.log(err));
// });
