import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="marvel"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;