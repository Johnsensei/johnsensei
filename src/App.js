import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import SocialMedia from './SocialMedia';
import GameDev from './GameDev';
import Japanese from './Japanese';
import Translation from './Translation';
import Footer from './Footer';
import Privacy from './Privacy';
import Support from './Support';

function App() {
  return (
    <Router>
      <div className="App">
        <PageContent />
      </div>
    </Router>
  );
}

function PageContent() {
  const location = useLocation();

  // Render Header and Footer only if not on the Privacy page
  const showHeaderAndFooter = (location.pathname !== '/privacy') && (location.pathname !== '/support');

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <main>
              <section id="socialmediamanagement">
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
          }
        />
        {/* Privacy page */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
