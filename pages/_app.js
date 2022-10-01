import styled from "styled-components"
import { Header } from "../components"
import { Layout } from "../components/Layout"
import "../styles/globals.css"
import { ThemeProvider } from "../contexts/ThemeContext"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bodyBg};
  min-height: 100vh;
`

const AppLayout = styled(Layout)`
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`
