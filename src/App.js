// used imp shortcut to generate skeleton to import Header and Footer
// used imd shortcut to generate skeleton to import Container from react-boostrap
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
        <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
