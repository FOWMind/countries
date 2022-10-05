import Head from "next/head";
import styled from "styled-components";
import { Header } from "../components";
import { Layout } from "../components/Layout";
import { ThemeProvider } from "../contexts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <ThemeProvider>
        <Wrapper>
          <Header />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bodyBg};
  min-height: 100vh;
`;

const AppLayout = styled(Layout)`
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
