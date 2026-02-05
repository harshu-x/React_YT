import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Button is clicked");
  }

  function inputChanging(){
    console.log("User is typing");
  }

  const pageScrolling =(elem)=>{
   
    if(elem>0){
      console.log("Page is scrolling");
    }
    else{
      console.log("Page is scrolling down");
    }
    
    
  
  }


  return (
    // <div>
    //   <h1>Hello Guys</h1>

    //   <button onClick={btnClicked}>click me!!</button>
    //   <button onClick={function(){
    //     console.log('hello guys')
    //   }}> Click me 2....</button>
    // </div>



    // <div>
    //   <input onChange={inputChanging} type='text'  placeholder='Enter name' />
    // </div>

    // <div>
    //   <div onMouseMove ={(elem)=>{
    //     console.log(elem.clientY);
    //   }}  className='box'></div>
    // </div>

    // <div onWheel={
    //   (elem)=>{
    //     pageScrolling(elem.deltaY);
    //   }
    // }>
    //   <div className='page1'></div>
    //     <div className='page2'></div>
    //       <div className='page3'></div>
    // </div>

    <div>
      <button> Click</button>
    </div>
  )
}

export default App
