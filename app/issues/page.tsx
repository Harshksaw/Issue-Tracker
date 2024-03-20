'use client'
import { , Table  } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { IssueStatusBadge } from "../components";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import prisma from "@/prisma/client";

import SimpleMDE from 'react-simplemde-editor';
import { z } from "zod";
import IssueActions from "./IssueActions";
import Link from "next/link";


const SimpleMDE = dynamic(()=> import('react-simplemde-editor')), { ssr : false });

type IssueForm = z.infer<typeof IssueFormSchema>;

const IssueForm = async () => {
  const issues = await prisma.issue.findMany();


  return (
    <div>
      <IssueActions />

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>

                <Link href={`/issues/${issue.id}`} 
                className="link " >
                  {issue.title}
                </Link>

                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell>
                {issue.status}
                <div className="hidden md:table-cell">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssueForm;
