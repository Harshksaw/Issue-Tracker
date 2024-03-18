'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import "easymde/dist/easymde.min.css";

import SimpleMDE from 'react-simplemde-editor';


const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3 border-blue-500'>
        <TextField.Root>

          <TextField.Input placeholder='Title'/>

        </TextField.Root>


        <SimpleMDE placeholder='description'/>
        <Button>Submit new Issue</Button>
      
    </div>
  )
}

export default NewIssuePage
