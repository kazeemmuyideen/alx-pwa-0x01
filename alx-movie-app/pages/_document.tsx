import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link manifest.json */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for the app (browser UI color) */}
        <meta name="theme-color" content="#0070f3" />

        {/* Optional: Add PWA icons for Apple devices */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
