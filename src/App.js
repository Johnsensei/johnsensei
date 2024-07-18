import './App.css';
import Header from './Header';
import SocialMedia from './SocialMedia'
import GameDev from './GameDev'
import Japanese from './Japanese'
import Translation from './Translation'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id='socialmediamanagement'>
          <SocialMedia />
        </section>
        <section id="gamedevelopment">
          <GameDev />
        </section>
        <section id="japaneselanguage">
          <Japanese />
        </section>
        <section id="translationinterpretation">
          <Translation />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
