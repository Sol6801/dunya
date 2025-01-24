// import {getRequestConfig} from 'next-intl/server';
// import {routing} from './routing';
 
// export default getRequestConfig(async ({requestLocale}) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;
 
//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale)) {
//     locale = routing.defaultLocale;
//   }
 
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async () => {
  // Usamos el locale por defecto si no se encuentra uno válido
  const locale = routing.locales.includes('en') ? 'en' : routing.defaultLocale;

  // Cargamos los mensajes estáticamente
  const messages = await import(`../../messages/${locale}.json`).then(mod => mod.default);

  return {
    locale,
    messages
  };
});
