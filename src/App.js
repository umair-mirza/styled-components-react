import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/globalStyles'

 const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
 }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header />
      <Container>

      </Container>
      </>
    </ThemeProvider>
    
  );
}

export default App;
