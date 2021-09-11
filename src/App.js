// import React from 'react'
// import STATE from './STATE'
// import Card from './Components/Card.js'
// import Data from './data.json'
// import Card1 from './Components/Card1.js'
// import Card2 from './Components/Card2.js'
import CONDITIONAL_RENDARING from './CONDITIONAL_RENDARING/index'




// function App(){
//   let items=[];
//   // for (let index = 0; index < Data.length; index++) {
//   //  items.push(<Card titlTxt= {Data[index].title} desTxt={Data[index].desc} />)
    
//   // }
//   items=Data.map((item,index)=><Card key={index} titlTxt= {item.title} desTxt={item.desc} />)

// return <div>
//   {items}
//   {/* <Card titlTxt={Data[1].title} desTxt={Data[1].desc} />
//   <Card titlTxt={Data[2].title} desTxt={Data[2].desc} />
//   <Card titlTxt={Data[3].title} desTxt={Data[3].desc} />
//    */}
//    <div>
//      <Card1 name="this is name card1" desc="this is desc card1" />
//      <Card2 nam="card2 name" />
//    </div>
// </div>

// }
// export default App;


import React from 'react'

export default function App() {
  return (
    <div>
      <CONDITIONAL_RENDARING />
    </div>
  )
}
