import { Button, Callout, Skeleton, Table, Text, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from 'react-hook-form'


import { useRouter } from 'next/navigation';
import IssueActions from './IssueActions';


const loading = () => {

  return (
    <div>
      
      <IssueActions/>
         <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {[1,2,3,4,5,6].map((issue) => (
            <Table.Row key={""}>
              <Table.Cell>
              <Skeleton/>

                <div className="block md:hidden">
              <Skeleton/>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Skeleton/>
                <div className="hidden md:table-cell">
                  <Skeleton/>
                </div>
              </Table.Cell>
              <Table.Cell><Skeleton/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default loading
