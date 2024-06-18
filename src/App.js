import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';

function App() {

  const[tours, setTour]= useState(data);

  function Btnhandler(id){
      const newTours= tours.filter(tour=>tour.id !==id );
      setTour(newTours);
   }

   function refreshHandler(){
      setTour(data);
   }

   if(tours.length===0){
    return (
      <div className='refresh'>
          <h2>No Tours Left</h2>
          <button className="btn-refresh" onClick={refreshHandler}>Refresh</button>
      </div>
    )
   }

  return (
    <div className='App'>
        <Tours tours={tours} Btnhandler={Btnhandler}/>
    </div>
  );
}

export default App;
