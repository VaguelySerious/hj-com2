import Head from 'next/head'

export default function Main() {
  return (
    <div>
      <Head>
        <title>
          Rechtsanwaltskanzlei Herbst Johanna - Neumarkt (Bozen) Südtirol
        </title>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon-precomposed"
          href="img/apple-touch-icon.png"
        />
        <meta
          name="description"
          content="Rechtsanwältin und Mediatorin - Kanzlei für Familienrecht (Scheidungen, Trennungen, Sorgerechtsverfahren), Zivilrecht (Forderungseintreibungen, Mietangelegenheiten, Erbrecht, Vertragswesen, Verkehrsunfälle, Dingliche Rechte etc.), Strafrecht"
        />
        <meta
          name="keywords"
          content="Rechtsanwalt, Mediatorin, Kanzlei, Recht, Beratung, Anwalt, Rechtsanwälte, Anwälte, Rechtsberatung, Fachanwalt, Anwaltskanzlei, Familienrecht, Scheidungen, Strafrecht, Erbrecht, Zivilrecht, Verkehrsunfälle, Vertragswesen, Sorgerechtsverfahren, Vertragswesen, Schadenersatzforderungen, Teilungen"
        />
      </Head>
      <nav className="nav">
        <div id="navbar" className="nav-bar">
          <div className="nav-bar-container">
            <div className="nav-title">Kanzlei Herbst</div>
            <button id="navbar-toggle">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
          {/* <a href="/main" className="language">
            DEUTSCH <i className="uk-icon-chevron-circle-right"></i>
          </a>
          <a href="/it/main" className="language">
            ITALIANO <i className="uk-icon-chevron-circle-right"></i>
          </a> */}
        </div>
        <div id="nav">
          <ul className="nav-dropdown">
            <li>
              <a href="#kontakt" data-uk-smooth-scroll="{offset: 260}">
                <span className="nav-italic uk-hidden-small">Kanzlei</span>
                <span className="nav-heading">KONTAKT</span>
              </a>
            </li>
            <li>
              <a href="#leistungen" data-uk-smooth-scroll="{offset: 260}">
                <span className="nav-italic uk-hidden-small">Unsere</span>
                <span className="nav-heading">TÄTIGKEITSBEREICHE</span>
              </a>
            </li>
            <li>
              <a href="#team" data-uk-smooth-scroll="{offset: 260}">
                <span className="nav-italic uk-hidden-small">Unser</span>
                <span className="nav-heading">TEAM</span>
              </a>
            </li>
            <li>
              <a href="de-index.html" className="language">
                DEUTSCH <i className="uk-icon-chevron-circle-right"></i>
              </a>
              <a href="it-index.html" className="language">
                ITALIANO <i className="uk-icon-chevron-circle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main id="content" style={{ display: 'block' }}>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild1.jpg')",
            backgroundSize: '1388px 694px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% -200px',
          }}
        ></div>

        {/* Section Kontakt */}
        <section id="kontakt" className="kontakt">
          <div className="kontakt-wrapper">
            <div className="kontakt-title">
              <h2>Kontakt</h2>
            </div>
            <div className="kontakt-content">
              ANWALTSKANZLEI <br />
              <h1 className="italic">RA Avv. Dr. Johanna Herbst</h1>
              <ul className="uk-list">
                <li>
                  <span className="italic">Adresse</span>
                  <div className="list-detail">
                    Bahnhofsstraße 10/1 <br />
                    39044 Neumarkt (BZ) <br />
                    Italien
                  </div>
                </li>
                <li>
                  <span className="italic">Telefon</span>
                  <div className="list-detail">+39 0471 820 715</div>
                </li>
                <li>
                  <span className="italic">Fax</span>
                  <div className="list-detail">+39 0471 813 526</div>
                </li>
                <li>
                  <span className="italic">Email Kanzlei</span>
                  <div className="list-detail">
                    <a
                      href="mailto:herbst.kanzlei@rolmail.net"
                      rel="herbst.kanzlei/rolmail.net"
                      className="herbstmail"
                    >
                      herbst.kanzlei@rolmail.net
                    </a>
                  </div>
                </li>
                <li>
                  <span className="italic">Email Johanna Herbst</span>
                  <div className="list-detail">
                    <a
                      href="mailto:johanna.herbst@pec.rolmail.net"
                      rel="johanna.herbst/pec.rolmail.net"
                      className="herbstmail"
                    >
                      johanna.herbst@pec.rolmail.net
                    </a>
                  </div>
                </li>
                <li>
                  <span className="italic">Mehrwertssteuer Nr.</span>
                  <div className="list-detail">02605690219</div>
                </li>
                <li>
                  <span className="italic">Steuernummer</span>
                  <div className="list-detail">HRBJNN73D56F950Z</div>
                </li>
              </ul>
            </div>
            <div className="kontakt-map">
              <div className="">
                <img src="img/anfahrt.jpg" alt="Anfahrt Kanzlei Herbst" />
                <a
                  href="https://www.google.com/maps/place/Herbst+Avv.+Johanna/@46.314424,11.268743,15z/data=!4m5!3m4!1s0x0:0xe7aba2240da6590d!8m2!3d46.314424!4d11.268743"
                  className="uk-button uk-margin-large-top"
                  target="_blank"
                >
                  Google Maps <i className="uk-icon-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild2.jpg')",
            backgroundSize: '1388px 694px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% -200px',
          }}
        ></div>

        {/* Section Leistungen */}
        <section id="leistungen" className="uk-container uk-container-center">
          <div className="uk-grid" data-uk-margin="{cls:'uk-margin-large-top'}">
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2>Tätigkeitsbereiche</h2>
            </div>
            <div className="more-top-margin uk-width-large-4-10 uk-width-medium-7-10">
              <h3 className="italic">
                Unsere Kanzlei berät und unterstützt Sie gerne in allen
                Bereichen des Zivilrechtes:
              </h3>
              <ul className="uk-list">
                <li>
                  FAMILIENRECHT (Ehetrennungen und Scheidungen,
                  Unterhaltsforderungen, Sorgerechtsverfahren usw.)
                </li>
                <li>
                  DINGLICHE RECHTE (Eigentum, Fruchtgenuss, Wohnrecht,
                  Grenzstreitigkeiten, Besitzschutzverfahren,
                  Eigentumsfreiheitsklagen, Teilungen usw.)
                </li>
                <li>FORDERUNGSEINTREIBUNGEN und VOLLSTRECKUNGSVERFAHREN</li>
                <li>MIET- UND KONDOMINIUMSANGELEGENHEITEN</li>
                <li>ERBRECHT</li>
                <li>VERTRAGSWESEN</li>
                <li>VERKEHRSUNFÄLLE</li>
                <li>SCHADENERSATZFORDERUNGEN</li>
                <li>SACHWALTERSCHAFTEN</li>
              </ul>
            </div>
            <div className="more-top-margin uk-width-large-3-10 uk-visible-large">
              <h3 className="italic">
                Im Strafrecht: <br />
                <br />
              </h3>
              <ul className="uk-list">
                <li>STRAFVERFAHREN</li>
                <li>AMTSVERTEIDIGUNGEN</li>
                <li>EINLASSUNGEN ALS ZIVILPARTEI IM STRAFVERFAHREN</li>
                <li>ABLEISTUNG DER STRAFE DURCH SOZIALDIENST</li>
                <li>STRAFZUMESSUNGEN</li>
              </ul>
            </div>
          </div>
        </section>
        <div
          className="parallax"
          data-uk-parallax="{bg: '-200'}"
          style={{
            backgroundImage: "url('img/background/bild3.jpg')",
            backgroundSize: '1388px 694px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% -200px',
          }}
        ></div>

        {/* Section Team */}
        <section id="team" className="uk-container uk-container-center">
          <div
            className="uk-grid uk-margin-large-bottom"
            data-uk-margin="{cls:'uk-margin-large-top'}"
          >
            <div className="uk-width-large-2-10 uk-width-medium-3-10">
              <h2>Unser Team</h2>
            </div>
            <div className="uk-width-large-7-10 uk-width-medium-7-10">
              <div className="uk-grid">
                <div className="uk-width-medium-2-3">
                  <img src="img/personal/johanna.jpg" alt="Johanna Herbst" />
                  <div className="team-member">
                    RA DR. <br />
                    <span className="italic">Johanna Herbst</span>
                    <br />
                    Rechtsanwältin und Mediatorin <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-3"></div>
              </div>
              <div className="uk-grid" data-uk-margin="{cls:'uk-margin-top'}">
                <div className="uk-width-medium-1-2">
                  <img src="img/personal/petra2.jpg" alt="Petra Dibiasi" />
                  <div className="team-member">
                    DR. <br />
                    <span className="italic">Petra Dibiasi </span>
                    <br />
                    Juristin <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-2">
                  <img src="img/personal/luca_riva.jpg" alt="Luca Riva" />
                  <div className="team-member">
                    RA DR. <br />
                    <span className="italic">Luca Riva </span>
                    <br />
                    Rechtsanwalt
                    <br />
                  </div>
                  <div className="uk-width-medium-1-3"></div>
                </div>
                <div className="uk-width-medium-1-2 uk-margin-top">
                  <img src="img/personal/rosa.jpg" alt="Rosa Herbst" />
                  <div className="team-member">
                    <span className="italic">Rosa Herbst</span> <br />
                    Sekretärin
                    <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-2 uk-margin-top">
                  <img src="img/personal/sigrid.jpg" alt="Sigrid Joppi " />
                  <div className="team-member">
                    <span className="italic">Sigrid Joppi</span> <br />
                    Sekretärin
                    <br />
                  </div>
                </div>
                <div className="uk-width-medium-1-2 uk-margin-top">
                  <img
                    src="img/personal/francesca.jpg"
                    alt="Francesca Dalmartello"
                  />
                  <div className="team-member">
                    <span className="italic">Francesca Dalmartello</span>
                    <br />
                    Rechtsanwaltsanwärterin
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-large-1-10 uk-visible-large uk-flex uk-flex-middle uk-flex-right">
              <a
                className="scroll-icon"
                href="#kontakt"
                data-uk-smooth-scroll="{offset: 110}"
              >
                <i className="uk-icon-chevron-circle-up"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
