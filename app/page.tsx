import Image from "next/image";
import Pagination from "./components/Pagination";
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";

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
    <div>
      {/* <IssueSummary open={open} closed={closed} inProgress={inProgress} /> */}
      <IssueChart open={open} closed={closed} inProgress={inProgress} />
{/* <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page!) } /> */}

    </div>
  );
}
