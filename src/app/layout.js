// import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import {notFound} from 'next/navigation';
// import {routing} from '@/i18n/routing.js';
// import localFont from "next/font/local";
// import "./globals.css";
// import { redirect } from 'next/navigation';

// const geistSans = localFont({
//   src: "../../public/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Dunya Idiomas",
//   description: "Learn portuguese, aprende portugues",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// // export default async function LocaleLayout({ children, params }) {
// //   const resolvedParams = await params;
// //   const { locale } = resolvedParams;

// //   // Ensure that the incoming `locale` is valid
// //   // if (!routing.locales.includes(locale)) {
// //   //   redirect('/pt'); // Solo pasar la URL de destino
// //   // }
// //   // Providing all messages to the client side is the easiest way to get started
// //   const messages = await getMessages();


// export default async function LocaleLayout({ children, params }) {
//   const locale = params.locale || routing.defaultLocale;  // Si no hay idioma, usa el predeterminado

//   // Cargar mensajes para este idioma
//   const messages = await import(`../../messages/${locale}.json`).then(mod => mod.default);

//   return (
//     <html lang={locale}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }


import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing.js';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Dunya Idiomas',
  description: 'Learn portuguese, aprende portugues',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale || routing.defaultLocale;

  // Cargar mensajes desde el servidor
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Pasar el control al componente cliente */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
