function Card(props){
    let {titlTxt,desTxt}=props
    return <div className="card">
   <h1 className="cardTitle">{titlTxt}</h1>
   <h3 className="cardDesc">{desTxt}</h3>
   {/* <p className="cardDesc">{go}</p> */}
   {/* <h1>{date}</h1> */}
   {/* <h1>i am tajus</h1> */}
   {/* <p>{ new Date().getFullYear()}</p> */}
   <p className="cardfooter">{currentDate +" /"+currentMonth+" /"+currentYear}</p>
   </div>
   }
   
//    let go="your home lorem10wjefiejfiejfjfif jfdjndfj ngbg ergey herfbe hefdbefn  "
   // let date="1/10/21"
   let date=new Date();
   let currentDate=date.getDate();
   let currentMonth=date.getMonth();
   let currentYear=date.getFullYear();
   
   // let cssStyl={
   //   backgroundColor:"yellow",
   //   color:"blue",
   //   fontSize: "3rem",
   //   textAlign:"center",
   // }

   export default Card;
