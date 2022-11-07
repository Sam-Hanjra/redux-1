
import { Button, Input } from '@mui/material';
import { Box, Container } from '@mui/system';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions/index';
import { useEffect } from 'react';

const App =()=>{
   const myState =useSelector((state)=> state.valueChange);
   const dispatch=useDispatch();

  

  return (
   <>
   <div className="main-div">
      

   <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} >
     


     
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div >
       

      <button 
        onClick={()=> dispatch(decNumber())}><span>-</span></button>
      

        <Input name="quantity" type="text" class="quantity__input" value={myState} />

        <button
        onClick={()=> dispatch(incNumber())}><span>+</span></button>
      </div>
    </Box>
  
      
  
    </Container>
        </div>
   </>
  );
}

export default App;
