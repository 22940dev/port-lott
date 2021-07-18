import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import withTwindDocument from "@twind/next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTwindDocument(MyDocument);