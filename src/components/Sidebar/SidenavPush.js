import React, { Component } from 'react';

import './SidenavPush.css';

class SidenavPush extends Component {
  state = {
    colorText: '',
  }

  render () {
    const divClass = this.props.classSidebar;
    return (
        
           <div className={divClass}>

               {/* <a href="#" className="closebtn">&times;</a> */}
               {/* <a href="#">About</a>
               <a href="#">Services</a>
               <a href="#">Clients</a>
               <a href="#">Contact</a> */}
               <form>
                 <br /><br />
                 <p>Font Style</p>
                 <select className="fontStyle">
                   <option>Arial</option>
                   <option>TimesNewRoman</option>
                 </select>
                 <p>Font Size</p>
                 <input type="range" min="8" max="24" step="1" className="fontSize" />
                 <p>Color Picker</p>
                 <input 
                 type="color" 
                 className="colorPicker" 
                 data-style-property="color" 
                 defaultValue={this.state.colorText} 
                 onChange={this.props.colorChange}
                  />
                 <br /><br />
               </form>
               <button className="Btn">Dellete</button>

           </div>
   );
 }
}

export default SidenavPush;