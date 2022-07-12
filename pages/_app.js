import '../styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name='viewport'
                      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
                <meta name='application-name' content='PWA App'/>
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='default'/>
                <meta name='apple-mobile-web-app-title' content='PWA App'/>
                <meta name='description' content='Best PWA App in the world'/>
                <meta name='format-detection' content='telephone=no'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='msapplication-TileColor' content='#ffffff'/>
                <meta name="msapplication-TileImage" content="images/icons/app-icon-144x144"/>
                <meta name='msapplication-tap-highlight' content='no'/>
                <meta name='theme-color' content='#ffffff'/>

                <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/app-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="48x48" href="/images/icons/app-icon-48x48.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/app-icon-96x96.png"/>

                <link rel='manifest' href='/manifest.json'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                      rel="stylesheet"/>

                <link rel='apple-touch-icon' href='/images/icons/app-icon-72x72.png'/>
                <link rel='apple-touch-icon' sizes='152x152' href='/images/icons/app-icon-152x152.png'/>
                <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/app-icon-180x180.png'/>
                <link rel='apple-touch-icon' sizes='167x167' href='/images/icons/app-icon-167x167.png'/>

                <title>HSA Collab PWA</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
