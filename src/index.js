import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nomi() {
  const [data, setValue] = useState([])


  function bhook(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var postText = document.getElementById("postText").value;
    var picture = document.getElementById("picture").value;

    var newData = {
      name: name,
      postText: postText,
      picture: picture
    }

    setValue((preValue) => {
      return preValue.concat([newData])
    })


  }
  return (
    <div>

      <form onSubmit={bhook} style={{ margin: "10px" }}>

        <input required placeholder="name" type="text" id="name" />
        <br />
        <input required placeholder="enter picture URl" type="text" id="picture" />
        <br />
        <textarea required placeholder="what is in your mind" type="text" id="postText" />
        <br />
        <button> Post </button>
      </form>

      { console.log("data: ", data)}



      {data.map((eachItem, i) => {
        return (
          <div className="main">
            <div key={i} >

             <img src={eachItem.picture} style={{width:"50px"}}/>
              <h2>{eachItem.name}</h2>
              <h6>{eachItem.postText}</h6>
              <img src={eachItem.picture} />

            </div>
          </div>

        )
      })}
    </div>
  );


}








ReactDOM.render(
  <Nomi />,
  document.getElementById('root')
);