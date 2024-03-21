import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button, Link } from '@radix-ui/themes'
import React from 'react'

interface Props {
    issueId: number;
}

const EditIssueButton = ({issueId}:Props) => {
  return (
    <div>
        <Button>
            <Pencil2Icon className="" />
            <Link href={`/issues/${issueId}/edit`}>Edit Issues</Link>
        </Button>
      
    </div>
  )
}

export default EditIssueButton
