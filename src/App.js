import './App.css';
import RegistrationForm from "./components/form/index"
import Header from "./layout/header"
import Footer from "./layout/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;