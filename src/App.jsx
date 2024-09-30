import React,{ useState } from 'react';

function App() {
  var [a,b] = useState(94);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white '>
      <h1>{a + 1}</h1>
    </div>
  
  );
}

export default App;