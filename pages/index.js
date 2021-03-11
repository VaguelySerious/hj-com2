import Head from 'next/head'
import text from '../assets/locales'

export default function Index() {
  const l = text.de

  return (
    <div className="uk-container uk-container-center" id="intro-page">
      <Head>
        <title>{l.meta.title}</title>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon-precomposed"
          href="img/apple-touch-icon.png"
        />
        <meta name="description" content={l.meta.description} />
        <meta name="keywords" content={l.meta.keywords} />
        <script src="js/components/parallax.min.js"></script>
        <link rel="stylesheet" href="start.css"></link>
      </Head>
      <span className="italic">{l.kontakt.prefix}</span>

      <h1 className="uppercase">{l.kontakt.heading}</h1>

      <div
        className="uk-grid uk-margin-large-top"
        data-uk-margin="{cls:'uk-margin-top'}"
      >
        <div className="uk-width-medium-2-10 uk-hidden-small"></div>
        <div className="uk-width-medium-3-10">
          <a href="/de" className="uk-button">
            DEUTSCH <i className="uk-icon-chevron-circle-right"></i>
          </a>
        </div>
        <div className="uk-width-medium-3-10">
          <a href="/it" className="uk-button">
            ITALIANO <i className="uk-icon-chevron-circle-right"></i>
          </a>
        </div>
        <div className="uk-width-medium-2-10 uk-hidden-small"></div>
      </div>
    </div>
  )
}
