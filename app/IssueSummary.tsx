import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "In-Progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <Flex gap="4" >
      {containers.map((container, id) => (
        <Card key={id}>
          <Flex direction="column" gap="2">
            <Link href={`/issues/list?containers=${container.status}`}
            className="text-sm font-medium text-gray-900 hover:text-gray-600 gap-1"
            >
                {container.label}
                </Link>
                
                <Text size="5" className="font-bold">{container.value}</Text>

          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
