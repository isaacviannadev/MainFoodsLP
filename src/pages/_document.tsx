import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../..//stitches.config';
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' href='/mffavicon.svg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Um novo conceito, o seu novo mercado!'
          ></meta>
          <meta name='description' content='Main Foods Market'></meta>
          <meta
            name='description'
            content='Chegamos para proporcionar a melhor experiência. Faça suas compras! '
          ></meta>
          <meta
            name='description'
            content='Mais conforto, os melhores produtos e o atendimento que você merece em um só lugar.'
          ></meta>
          <meta name='robots' content='noindex,nofollow'></meta>
          <meta name='google' content='nositelinkssearchbox' />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
