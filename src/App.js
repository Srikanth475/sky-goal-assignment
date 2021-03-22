import { Card} from 'reactstrap';
import React from 'react';
import BellIcon from 'react-bell-icon';
import './App.css';
import Avatar from 'react-avatar';

import { VscHome,VscCalendar,VscGraph } from "react-icons/vsc";
import { IoIosBody,IoIosFootball,IoIosBrush,IoIosFlower,IoIosBicycle,IoIosPeople,IoIosWater,IoMdAnalytics,IoMdPaper} from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";

function App() {
  
  
  return (
<div className="App">
      <div className="front-card" >
                 <div class="wrapper">
                      <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" alt=" " />
                      <input className="search" type="search" placeholder="type in to search"/>
                      <img alt=" " class="clear-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                 </div >
                       <BellIcon className="topright" width='20' active={true} animate={true} />
                       <Avatar className="topright1"  src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.0-0/p600x600/131300094_2894361764178584_7546767104236628024_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WycMVR36bH8AX9OaHPY&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=f03a82c5e96e7a8b567504adc7afc693&oe=6076EBDA" size="30"   round={true}/>
                       <form className="topright2">
                           <select className="topright2" ><option id="owner">Srikanth</option></select>
                       </form>
          <div className="section">
                          <Card className="topright3">
                                <Avatar   src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.0-0/p600x600/131300094_2894361764178584_7546767104236628024_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WycMVR36bH8AX9OaHPY&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=f03a82c5e96e7a8b567504adc7afc693&oe=6076EBDA" size="80"  radius="90px" round={true}/>
                                <p>Daily points<br/><span>  2,468</span></p>
                                <hr></hr>
                                <div><h5 className="heading">Dashboard</h5> </div>
                                <h6 className="icons"><VscHome  size="20px"/>  <span className="icon"> Over View</span></h6>
                                <h6 className="icons"><VscCalendar  size="20px"/>  <span className="icon"> Daily Plan</span></h6>
                                <h6 className="icons"><VscGraph  size="20px"/>  <span className="icon"> Progress</span></h6>
                                <hr></hr>
                                <div><h5 className="heading">Personal Tips</h5></div>
                                <h6 className="icons"><IoIosBody size="20px"/>  <span className="icon"> Nutrition</span></h6>
                                <h6 className="icons"><IoIosFootball size="20px"/>  <span className="icon"> Sport</span></h6>
                                <h6 className="icons"><IoIosBrush size="20px"/>  <span className="icon"> Beauty</span></h6>
                                <h6 className="icons"><IoIosBicycle size="20px"/>  <span className="icon"> Health</span></h6>
                                <h6 className="icons"><IoIosFlower size="20px"/>  <span className="icon"> Mindfullness</span></h6>
                                <hr></hr>
                                <div><h5 className="heading">Your Data</h5></div>
                                <h6 className="icons"><IoIosWater size="20px"/>  <span className="icon"> Blood</span></h6>
                                <h6 className="icons"><IoIosPeople size="20px"/>  <span className="icon"> DNA</span></h6>
                                <h6 className="icons"><IoMdAnalytics size="20px"/>  <span className="icon"> Microbiome</span></h6>
                                <h6 className="icons"><IoMdPaper size="20px"/>  <span className="icon"> Questionnaire</span></h6>
                          </Card>
             <Card className="card1">
                             <div className="layout">
                                 <h4 >Daily Monitering   <span className="corner-text">see progress</span></h4>
                                     <div className="grid-row">
                                          <div className="grid-item"><img className="images" src="https://image.flaticon.com/icons/png/128/3730/3730153.png" alt= ""/>
                                              <div className="daily-text"> <h2 >Calories</h2><h1>2814</h1><h3 className="daily-sub">Daily Average</h3></div>
                                          </div>
                                          <div className="grid-item"><img className="images" src="https://image.flaticon.com/icons/png/128/1704/1704416.png" alt=""/>
                                              <div className="daily-text">   <h2 >Steps</h2><h1>7234</h1><h3 className="daily-sub">Daily Average</h3></div> 
                                          </div>
                                          <div className="grid-item"><img className="images" src="https://image.flaticon.com/icons/png/128/3013/3013147.png" alt=""/>   
                                              <div className="daily-text">   <h2 >Workouts</h2><h1><b>1</b>h<b>23</b>min</h1><h3 className="daily-sub">Active</h3></div> 
                                          </div>
                                          <div className="grid-item"><img className="images" src="https://image.flaticon.com/icons/png/128/181/181763.png" alt=""/>
                                              <div className="daily-text">  <h2 >Sleep Analysis</h2><h1>7h25min</h1><h3 className="daily-sub" >IN Bad Average</h3></div>  
                                          </div>
                                     </div>
                                          <h4>Challenges <span className="middle-text">Daily Tips</span> <span className="corner-text2">see progress</span></h4>
                       <div className="grid-row">
                                 <div className="grid-item1"> 
                                      <div className="middle-first"><h1 className="middle-top">Mindfullness</h1>
                                             <h4 className="font-color4">Start your day with energy.For breakfast,preapre a powerful and healthy rich pottasium and vitamin C.it will boost your metabolism.</h4>
                                             <h2>RECEPIE</h2>
                                              <div>
                                                  <ul className="ullist">
                                                     <li>130g banana</li>
                                                     <li> 1 whole kiwi</li>
                                                      <li>250mL orange juice</li>
                                                      <li>3spoons of yogurt</li>
                                                    </ul>
                                                    <h2 className="vl"><h2 className="side-text">420 cal</h2></h2>
                                                </div>
                                                 <h3 className="font-color5">ADD CHALLENGE</h3><h4 className="font-color6">CHALLENGES FRIEND</h4>
                                       </div>
                                  </div>
                         <div className="grid-item2">
                              <div className="middle-right">
                                     <h2 className="font-color1">Mindfullness</h2>
                                     <h4 className="font-color2">Do one-hour yoga for improving your body balance flexibility and strength.</h4>
                                    <h3 className="font-color3" > ><span> </span>Find out more </h3>
                                     <hr></hr>
                                     <h2 className="font-color1">Get more of your day</h2>
                                     <h4 className="font-color2">Wake up 40 min before the usual and go for a morning walk in the park.</h4>
                                     <h3 className="font-color3"> ><span> </span> Find out more</h3>
                                     <hr></hr>
                                     <h2 className="font-color1">Early bedtime</h2>
                                     <h4 className="font-color2">Go to sleep more at the same hour every night.</h4>
                                     <h3 className="font-color3"> > <span> </span>Find out more</h3>
                                </div>
                            </div>
                      </div>
                          <h4>Recomended Challenges <span className="corner-text3">see progress</span></h4>
                     <div className="grid-row">
                        <div className="grid-item3" >
                             <p className="icons-right"><BsPlusCircle/></p>
                             <div className="last"><img className="icons4" src="https://image.flaticon.com/icons/png/128/2936/2936886.png" alt=""></img><h2 className="text-last">High-Intensity Training</h2><h3 className="text-last1">Running in the nature</h3></div>
                         </div>
                        <div className="grid-item4">
                            <p className="icons-right"><BsPlusCircle/></p> <div className="last"><img className="icons4" src="https://image.flaticon.com/icons/png/128/552/552458.png" alt=""></img><h2 className="text-last">Colorful evening meal</h2><h3 className="text-last1">Vegetable for better recovery</h3></div></div>
                            <div className="grid-item5"> <p className="icons-right"><BsPlusCircle/></p> <div className="last"><img className="icons4" src="https://image.flaticon.com/icons/png/128/189/189671.png" alt=""></img><h2 className="text-last">Meditate for 5 minsg</h2><h3 className="text-last1">Train your mind</h3></div></div>
                            <div className="grid-item6"> <p className="icons-right"><BsPlusCircle/></p>  <div className="last"><img className="icons4" src="https://image.flaticon.com/icons/png/128/4388/4388814.png" alt=""></img><h2 className="text-last">Skin hydration</h2><h3 className="text-last1">Drink spinach smoothe</h3></div></div>
                         </div>
                     </div>

             </Card>
         </div>
     </div>
 </div>
  );
}
export default App;