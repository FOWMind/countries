import styled from "styled-components"
import { Header } from "../components"
import { Layout } from "../components/Layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp

const AppLayout = styled(Layout)`
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`
