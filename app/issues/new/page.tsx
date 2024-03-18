'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3 border-blue-500'>
        <TextField.Root></TextField.Root>

          <TextField.Input >Name</TextField.Input>

        <TextField.Input id="name" />
        <TextArea placeholder='description'></TextArea>
        <Button>Build the new Issues</Button>
      
    </div>
  )
}

export default NewIssuePage
