
import './App.css';
import Finish from './components/Finish';
import Form from './components/Form';
import Header from './components/Header';
import Plan from './components/Plan';
import AddOn from './components/AddOn';
import { Route,Routes } from 'react-router-dom';
import Thanks from './components/Thanks';

function App() {
  return (
    <main className='container'>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='addon' element={<AddOn />} />
          <Route path='/finish' element={<Finish />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
