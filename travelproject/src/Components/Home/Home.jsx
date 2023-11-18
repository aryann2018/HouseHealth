import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

//Icons Imported
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }])
  }

  return (
    <section className='w-full px-4 py-10'>
      <div className='form mx-auto w-[490px]'>
        <Stack direction="row" spacing={2}>
          <TextField 
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic" 
          label="Name" 
          variant="outlined" />

          <TextField 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="outlined-basics" 
          label="Email" 
          variant="outlined"
          />
          <Button 
          onClick={addData}
          variant="contained"
          color='error'>
          <FaPlus />

        </Button>
        </Stack>
      </div>
      <div className='dataList mt-10 bg-grey-700 p-5 w-[500] mx-auto'>
        <Stack direction="row" spacing={2}>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </Stack>
      </div>
    </section>
  )
}

export default Home