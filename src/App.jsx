
import { useState } from 'react';
import startIcon from './images/icon-star.svg';
import thanksIcon from './images/illustration-thank-you.svg';
/*
  <!-- Rating state start -->

  How did we do?

  Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!

  1 2 3 4 5

  Submit

  <!-- Rating state end -->

  <!-- Thank you state start -->

  You selected <!-- Add rating here --> out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!

  <!-- Thank you state end -->
*/
function Questions({ setRate, setActiveState }) {
  const [active, setActive] = useState({
    activeObj: null,
    objs: [ {id:0}, {id:1}, {id:2}, {id:3}, {id:4} ]
  });
  
  const toggelActive = e => {
    setActive({...active, activeObj: active.objs[e.target.id]});
    console.log(active);
  }

  const handleSubmit = () => {
    setRate(active.activeObj);
    setActiveState('thanks');
  }
  return (
    <>
      <div className="text-start">
        <img className='bg-gray-700 rounded-full p-4' src={startIcon} alt="start icon" />
      </div>
      <div>
        <h1 className="text-white text-2xl">How did we do?</h1>
        <p className="text-gray-400">
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
      </div>
      <ul className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <li onClick={toggelActive} aria-disabled={true} id={item} className={`bg-gray-800 hover:bg-orange-500 ${active.objs[item] === active.activeObj ? "bg-slate-200" : ""} flex items-center justify-between text-gray-400 hover:text-white rounded-full px-4 py-2 cursor-pointer`} key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleSubmit} className="text-white uppercase tracking-wider hover:text-orange-500 bg-orange-500 hover:bg-white w-full py-2 rounded-3xl">Submit</button>
      </div>
    </>
  )
};

function Thanks({rate}) {
  return (
    <>
      <div className="flex justify-center w-full mb-5">
        <img src={thanksIcon} alt="thanks icon" />
      </div>
      <div className="flex justify-center w-full">
        <p className='bg-gray-700 text-xs rounded-2xl text-orange-500 pt-1 px-4'>You selected {rate?.id || 5} out of 5</p>
      </div>
      <div className='text-center'>
        <h1 className="text-white text-2xl">Thank you!</h1>
        <p className="text-gray-400">
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
    </>
  )
};

function App() {
  const [rate, setRate] = useState();
  const [activeState, setActiveState] = useState('question');
  

  return (
    <div className="font-Ove w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="grid gap-5 w-80 p-6 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl">
        {activeState === 'question' && <Questions setRate={setRate} setActiveState={setActiveState} />}
        {activeState === 'thanks' && <Thanks rate={rate} />}
      </div>
    </div>
  )
}

export default App
