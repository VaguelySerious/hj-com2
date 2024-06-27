import Document, { Html, Head, Main, NextScript } from "next/document";

class MyHead extends Head {
  render() {
    let { head } = this.context;
    console.log(this.context);
    let children = this.props.children;

    console.log({ children });

    // const cssFiles = (files || []).filter((file) => /\.css$/.test(file))
    return (
      <head {...this.props}>
        {children}
        {head}
        <link rel="stylesheet" href="/uikit.min.css" />
        <link rel="stylesheet" href="/index.css" />
        {/* {cssFiles.map((file) => (
          <link key={file} rel="stylesheet" href={file} />
        ))} */}
        {/* {this.getCssLinks()} */}
      </head>
    );
  }
}

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const isDev = process.env.NODE_ENV === "development";
    return (
      <Html>
        {isDev ? <Head /> : <MyHead />}
        <body>
          <Main />
          {isDev && <NextScript />}
          {/* <script
            src="//instant.page/5.1.0"
            type="module"
            integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"
          ></script> */}
        </body>
      </Html>
    );
  }
}
