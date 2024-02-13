import '../Assets/Styles/App.css';
import CardShowcase from '../Components/CardShowcase';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function App() {
  return (
    <>
      <NavBar />
        <main>
          <h2 class="app-section-heading">APPS</h2>
          <div class="app-section">
            <CardShowcase title="Crypto Profit Loss Calculator App" desc="Calculator app made to calclulate pontential crypto profits and losses." imgURL={require('../Assets/Images/Logos/Crypto_Profit_Loss_Aivirx.webp')} cardLink="https://apps.apple.com/us/app/crypto-profit-loss-calculator/id1638849680" />
            <CardShowcase title="TaskNow - Simple ToDo List" desc="To-Do List app with minimalistic UI, made to be easy to use for everyone." imgURL={require('../Assets/Images/Logos/TaskNow_Aivirx.webp')} cardLink="https://apps.apple.com/us/app/tasknow-simple-to-do-list/id1639588217"/>
            <CardShowcase title="Myself - Daily Affirmations" desc="Affirmations app that shows positive and motivational reminders. Widgets Included!" cardLink="https://apps.apple.com/us/app/myself-daily-affirmations/id6443645849"/>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default App;