import Image from "next/image";
import Pagination from "./components/Pagination";
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

import { title } from "process";
import { Metadata } from "next";

export default function Home({searchParams}: {searchParams: {page?: string}}) {

  const open = prisma.issue.count({
    where: {status: 'OPEN'}
  })
  const closed = prisma.issue.count({
    where: {status: 'CLOSED'}
  })
  const inProgress = prisma.issue.count({
    where: {status: 'IN_PROGRESS'}
  })

  return (
    <Grid columns={{initial: "1", md:"2"}} gap="5">
      <Flex direction="column" gap="4">
        <IssueSummary open={open} closed={closed} inProgress={inProgress} />
          <IssueChart open={open} closed={closed} inProgress={inProgress} />
        </Flex>
        <LatestIssues />



    </Grid>
  );
}


export const metadata : Metadata = {
  title: "Issue Tracker -Dashboard",
  description: "Issue Tracker - view project summary and latest issues",
}