import React,{createContext} from 'react'
import App from 'next/app'
import {defaultTheme} from '../utils'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../components/common/Global'
import store from '../store'
import {Provider} from 'react-redux'
import {Provider as AuthProvider} from 'next-auth/client'


class MyApp extends App {
  render() {
    const UserContext = createContext({})
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <AuthProvider session={pageProps.session}>
          <UserContext.Provider value={pageProps.user}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle/>
                <Component {...pageProps} />
            </ThemeProvider>
          </UserContext.Provider>
          
        </AuthProvider>
        
      </Provider>
        
    )
    
  }
}

export default MyApp