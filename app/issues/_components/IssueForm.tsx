'use client'
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from 'react-hook-form'

import SimpleMDE from 'react-simplemde-editor';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import {set, z} from 'zod'
import { IssuesSchema } from '@/app/validationSchema';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import {Issue} from '@prisma/client'

type IssueFormData = z.infer<typeof IssuesSchema>

interface Props{
  issue? : Issue
}

const IssueForm = ( {issue} : Props) => {



 
    

    const {register, control , handleSubmit, formState: {errors }} = useForm<IssueFormData>({
      resolver: zodResolver(IssuesSchema)
    })
    console.log(register('title'));
    const router = useRouter();

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmit =  handleSubmit(async(data : any) =>{
      try {
        setIsSubmitting(true);
        // create Issue(data)
        if(issue){
          axios.patch('/api/issues'  + issue.id, data);
        }
        else{

          await axios.post('/api/issues', data);
        }
        router.push('/issues');
      
      } catch (error) {
        setIsSubmitting(false);
        console.log(error);
        setError('An unexpected error occured.');
        
      }
    })


  return (
    <div  className='max-w-xl space-y-1'>
      {error && 
      <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}


    <form className='max-w-xl space-y-3 border-blue-500' 
        onSubmit={onSubmit}>

        <TextField.Root>

          <TextField.Input
          defaultValue={issue?.title}
          placeholder='Title' {...register('title')}/>

        </TextField.Root>
      <ErrorMessage> {errors.title?.message} </ErrorMessage>
        <Controller
        defaultValue={issue?.description} //for edit form

        name='description'
        control={control}
        render={({field})=>  <SimpleMDE placeholder='description' {...field}/>}
        />
        <ErrorMessage> {errors.description?.message}</ErrorMessage>

        
        <Button disabled={isSubmitting}>
        {issue ? 'Update Issue' : 'Submit new Issue'}{" "}

        { isSubmitting && <Spinner/>}</Button>
      
    </form>
    </div>
  )
}

export default IssueForm;
