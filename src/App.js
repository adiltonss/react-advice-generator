import React, {useEffect, useState} from 'react';
import './css/main.css'

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => displayData(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const displayData = (data) =>{
    setData(data)
    setIsLoading(false)
  }

  return (
    <div className="box">
    {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <h6 className="advice-id">ADVICE# {data.slip.id}</h6>
          <p className="advice-box">{data.slip.advice}</p>
          <button onClick={fetchData} className="make-request">
            <i class="fi fi-sr-dice"></i>
          </button>
          <span></span>
        </>
      )}
    </div>
  )
}

export default App;