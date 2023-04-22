import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Mahesh Muttinti Portfolio Website',
      description:
        'Mahesh Muttinti is full stack developer and he is mostly like to code in HTML and CSS',
    }

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@MMuttinti" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          {/* <!-- Cloudflare Web Analytics --> */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "7c52d381f0704058995284623570bd60"}'
          ></script>
          {/* <!-- End Cloudflare Web Analytics --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
