import '../styles/globals.css'
import Header from '../Components/Header/Header'
import { createTheme, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';


function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    direction: 'rtl',
  });

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir='rtl'>
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp; 
