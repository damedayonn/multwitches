import './App.css';
import React,{useState} from 'react';
import Approuter from './AppRouter.js';
function App() {
  const [onDark,setOnDark] = useState(false);
  return (
    <div className={onDark ? 'App light' : 'App'}>
      <Approuter
          onDark={onDark}
          setOnDark={setOnDark}
      />
    </div>
  );
}

export default App;
