import prisma from "@/prisma/client";


import IssueActions from "../IssueActions";
import { Issue, Status } from "@prisma/client";

import Pagination from "@/app/components/Pagination";
import IssueTable, { columnNames } from "./IssueTable";
import { Flex } from "@radix-ui/themes";


interface IssueQuery{
  status: Status;
  orderBy: keyof Issue;
  page: string;

}
interface Props {
  searchParams: IssueQuery,
  issues :  Issue[];
}

const IssuesPage = async ({ searchParams }: Props) => {

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const where = { status };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where,
  });
  return (
    <Flex direction="column" gap="3" >
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};



export const dynamic = "force-dynamic";


export const metadata : Metadata = {
  title: "Issue Tracker list page",
  description: "Issue Tracker - view project summary and latest issues",
}
export default IssuesPage;
