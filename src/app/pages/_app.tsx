import 'semantic-ui-css/semantic.min.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
