import React,{useState,useEffect} from 'react';
import axios from 'axios';
const newUser={
  from :'447451288248',
  to :'6583824883',
  text : 'TEST USING EXPRESS as middleware',
}
const config={
  method: 'POST',
  headers:{
      'Content-Type':'application/json'
  }
}
function App(props) {    

  const[responsebody,setResponsebody] = useState("");

    // async function handleSubmit() {
    //   const response = await fetch('/getsms', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ from :'447451288248',
    //     to :'6583824883',
    //     text : 'TEST USING EXPRESS as middleware' }),
    //   });
    //   const body = await response.text();
  
    //   setResponsebody(body.to);
    // };

    
    function handleSubmit() {
      axios.post('/getsms',{
        from :'447451288248',
        to :'447451288286',
        text : 'TEST USING EXPRESS as middleware'
      }).then( function (response){
        console.log(response.data.response)  
        setResponsebody(response.data.response);
      })
    };

    return (
      <div className="nexmo">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        <p>{responsebody.to}</p>
        <p>{responsebody["message-id"]}</p>
      </div>
    );
};

export default App;