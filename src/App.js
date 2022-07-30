import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'

 const theme = {
  color: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768'
 }

function App() {
  return (
    <ThemeProvider>
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
