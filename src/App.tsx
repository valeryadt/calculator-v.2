import React from 'react';
import './App.css';
import Test from './/image/mockup.png'
import Button from "./components/button";

function App() {
  return (
    <div className="calculator__container flex justify-center items-center h-full w-full">
        <div className="relative rounded rounded-xxl">
            <img src={Test} alt="lorem" />
        </div>
        <div className="grid-cols-4 grid-rows-5 grid absolute text-white">
            <Button number={1} />
        </div>
    </div>
  );
}

export default App;
