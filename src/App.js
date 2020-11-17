import Main from './components/Main';
import './App.css';

function App() {

  return (
    <div className="App" style={{
      background: `url('${process.env.PUBLIC_URL}/images/lego_christmas_bg_1.png')`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Main />
    </div>
  );
}

export default App;
