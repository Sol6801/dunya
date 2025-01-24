// import {defineRouting} from 'next-intl/routing';
// import {createNavigation} from 'next-intl/navigation';
 
// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ['en', 'pt', 'es', 'br'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// // Lightweight wrappers around Next.js' navigation APIs
// // that will consider the routing configuration
// export const {Link, redirect, usePathname, useRouter, getPathname} =
//   createNavigation(routing);

import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Definimos las rutas con locales estáticos
export const routing = defineRouting({
  // Lista de locales soportados
  locales: ['en', 'pt', 'es', 'br'],
  
  // Locale por defecto cuando no hay coincidencia
  defaultLocale: 'en',
  path: '/:locale',
});

// Funciones para navegación ligera basadas en la configuración de rutas
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
