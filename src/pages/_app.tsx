import React from 'react'
import App from 'next/app'
import {defaultTheme} from '../utils'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../components/common/Global'
import Header from '../components/common/Header'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
    
  }
}

export default MyApp