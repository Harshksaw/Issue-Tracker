import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";
import Link from "@/app/components/Link";
import delay from "delay";
import { Pencil2Icon } from "@radix-ui/react-icons";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "@/app/api/issues/[id]/AssigneeSelect";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  // if (typeof params?.id !== 'number') notFound();

  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  await delay(3000);
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="lg : col-span-4">
        <IssueDetails issue={issue} />
      </Box>

      {session &&
      <Box>
        <Flex direction="column" gap="4">
        <AssigneeSelect issue={issue} />
       <EditIssueButton issueId={issue.id} />

       <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
}
    </Grid>
  );
};

export async function generateMetadata({params} : Props){
  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(params.id)}
  });

  return {
    title: issue?.title,
    description: 'Details of issue'  + issue?.id
  }
}

export default IssueDetailPage;

