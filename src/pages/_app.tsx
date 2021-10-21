import React from 'react'
import App from 'next/app'
import {defaultTheme} from '../utils'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../components/common/Global'
import Header from '../components/common/Header'
import store from '../store'
import {Provider} from 'react-redux'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
        
    )
    
  }
}

export default MyApp