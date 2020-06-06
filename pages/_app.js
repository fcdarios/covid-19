import App from 'next/app';
import React from 'react'
import '../scss/SignUp.scss'
import '../scss/NavigationBar.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }