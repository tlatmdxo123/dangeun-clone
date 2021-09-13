import {GlobalStyle} from '../src/components/common/Global'
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from '../src/utils/themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];
