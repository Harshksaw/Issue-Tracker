import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatusFilter from './list/IssueStatusFilter'

const IssueActions = () => {
  return (
    <Flex  justify="between">

      <IssueStatusFilter/>
      
    <Button>
      <Link href="/new">Submit new</Link>
    </Button>
    </Flex>
  )
}

export default IssueActions
