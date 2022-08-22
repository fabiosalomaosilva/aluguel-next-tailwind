import '../styles/globals.css'
import type { AppProps } from 'next/app'
import EmptyLayout from './layouts/emptyLayout';
import MainLayout from './layouts/mainLayout';

function MyApp({ Component, pageProps }: AppProps) {
	const Layout = MainLayout || EmptyLayout;

  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);}

export default MyApp
