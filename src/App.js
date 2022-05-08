import './App.css';
import ProfilePhoto from './components/ProfilePhotos'
import FullName from './components/FullName'
import  Adress from './components/Adress'
function App() {
  return (
    <div className="container">
     <ProfilePhoto /> 
     <FullName  />
     <Adress />
    </div>
  );
}

export default App;
