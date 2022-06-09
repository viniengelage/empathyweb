import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html className="scroll-smoth" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <meta property="og:title" content="PATH - Um caminho para empatia" />
          <meta property="og:image" content="/opengraph-path.png" />
          <meta
            property="og:description"
            content="Aprenda o que é e como desenvolver empatia"
          />
          <meta property="og:url" content="https://empathyweb.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
