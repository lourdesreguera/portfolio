import { NextIntlClientProvider, createTranslator } from "next-intl";
import { montserrat, leky } from "../fonts";
import { notFound } from "next/navigation";

async function getMessages(locale) {

  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

// export async function generateMetadata( locale ) {
  
//   const messages = await getMessages(locale.params.locale);
//   console.log(messages)

//   // You can use the core (non-React) APIs when you have to use next-intl
//   // outside of components. Potentially this will be simplified in the future
//   // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
//   const t = createTranslator({ `${locale.params.locale}`, messages });

//   return {
//     title: t("LocaleLayout.title"),
//   };
// }

export default async function LocaleLayout({ children, params:{locale} }) {

  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={`${leky.variable} ${montserrat.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
