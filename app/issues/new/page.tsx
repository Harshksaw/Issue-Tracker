'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
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


  return (
    <form className='max-w-xl space-y-3 border-blue-500' 
    onSubmit={handleSubmit(async (data) =>{ axios.post('/api/issues', data);
        router.push('/issues');
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
  )
}

export default NewIssuePage
