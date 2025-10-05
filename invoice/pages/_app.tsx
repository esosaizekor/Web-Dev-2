// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

import Layout from '../components/layout';
import type { AppProps } from "next/app";

export default function App({Component, pageProps } : AppProps) {

  return (
    <Layout>
      < Component {...pageProps} />           
    </Layout>
  );
}

