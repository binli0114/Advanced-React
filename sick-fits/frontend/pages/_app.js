import Page from "../components/Page";
export default function MyApp({ Component, pageProps }) {
  return (
    <Page cool="eee">
      <Component {...pageProps} />
    </Page>
  );
}
