// src/App.js
import LoginForm from './components/LoginForm';
import './App.css'; // optional, if you have global styles
// If you have a custom animation CSS, import it here
// import './animations.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen flex items-center justify-center p-4">
      <LoginForm />
    </div>
  );
}

export default App;