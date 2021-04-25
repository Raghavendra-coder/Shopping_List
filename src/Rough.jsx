import react, { useState } from 'react';
import './index.css'
 const App = () => {

   const [setName,setfullName] = useState({
     fname : "",
     lname : "",
     mobile :"",
     eMail : "" 
   })
   const Input = (event) => {
     const value = event.target.value;
     const name = event.target.name;
       
     setfullName((ool) =>{
       return {
         ...ool,
         [name] : value
       };
      })
    }

   
   const submit = (event) => {
     alert('Form Submitted');
     event.preventDefault();
   }  
  return(
    <> 
     <form onSubmit={submit}>
      <div>
           <h1>Hello {setName.fname} {setName.lname}
           </h1>
              <h4>
                {setName.mobile}
              </h4>
                    <h2>
                   {setName.eMail}
                    </h2>
                         <input type="text" 
                             placeholder="Enter Your First Name" 
                             name="fname" 
                             onChange={Input} 
                             value = {setName.fname} 
                        />
                        <input type="text" 
                             placeholder="Enter Your Last Name" 
                             name="lname" 
                             onChange={Input} 
                             value = {setName.lsname}  
                        />
                        <input type="number" 
                             placeholder="Enter Your Mobile No." 
                             name="mobile" 
                             
                             onChange={Input} 
                             value ={setName.mobile} 
                        />
                        <input type="text" 
                             placeholder="Enter Your E-mail" 
                             name="eMail" 
                             onChange={Input} 
                             value = {setName.eMail}  
                        />
                        <button  type="submit">Submit</button>
       
      </div>

     </form>


  </>
  );
 }
 export default App;