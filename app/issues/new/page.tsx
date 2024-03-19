'use client'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from 'react-hook-form'

import SimpleMDE from 'react-simplemde-editor';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface IssueForm{
    title: string;
    description: string;
}
const NewIssuePage = () => {
    const {register, control , handleSubmit} = useForm<IssueForm>()
    console.log(register('title'));
    const router = useRouter();

    const [error, setError] = useState('');


  return (
    <div  className='max-w-xl space-y-1'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}


    <form className='max-w-xl space-y-3 border-blue-500' 

  
    onSubmit={handleSubmit(async (data) =>{
      try {
        await axios.post('/api/issues', data);
        router.push('/issues');
      
      } catch (error) {
        console.log(error);
        setError('An unexpected error occured.');
        
      }
      
      
  })}>
        <TextField.Root>

          <TextField.Input placeholder='Title' {...register('title')}/>

        </TextField.Root>

        <Controller
        name='description'
        control={control}
        render={({field})=>  <SimpleMDE placeholder='description' {...field}/>}
        />
       
        <Button>Submit new Issue</Button>
      
    </form>
    </div>
  )
}

export default NewIssuePage
