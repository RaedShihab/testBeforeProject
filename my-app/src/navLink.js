import React  from 'react';
import {NavLink} from 'react-router-dom';




const Navgation =() =>{

    return (
     <div>

        <div>

           <div>
           <button style={{position: 'relative', bottom:'95em'}} class="btn btn-primary btn btn-block btn-lg btn-primary" 
           type="submit" >
           <NavLink to="/com4" class="btn btn-primary"  exact>Search the car you need </NavLink>
           </button>
            </div>

        </div>

        <div>   
         <div>
    <button  style={{position: 'relative', bottom:'95em'}}
    class="btn btn-primary btn btn-block btn-lg btn-primary"
    type="submit"
    >
       <NavLink to="/App1" class=" btn-primary" exact>For Companies </NavLink>
    </button>  
       </div>
        </div>

       </div>
    )
}

export default Navgation;
