import React from 'react'

import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import IssueFormSkeleton from './loading'


interface Props{
    params: {id: string}
}

const IssueForm = dynamic(
    ()=> import('@/app/issues/_components/IssueForm'),
    {
        ssr:   false,
        loading: () => <IssueFormSkeleton/>
    }
)


const EditIssuePage =async ({params} : Props) => {

    const issues = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
        })

        if(!issues) notFound();
  return (
        <IssueForm issue={issues} />
  )
}
export default EditIssuePage;