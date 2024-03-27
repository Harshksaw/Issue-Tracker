import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

const issues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include:{
        assignedToUser : true
    }
  });
  return (
    <Card>
        <Heading size="4" mb="4">Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue, id) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" key={id} gap="2" align="start">
                    <Link href="`/issues/${issue.id}`">{issue.title}</Link>
                    <IssueStatusBadge status={issue.badge} />
                  </Flex>
                </Flex>
                {issue.assignedToUserId && (
                    <Avatar src={issue.assignedToUser.image!} 
                    fallback = {issue.assignedToUser.name[0]}
                    size="2"
                    radius="full" />
                ) }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default issues;
