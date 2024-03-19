import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
    status: Status;
}

const statusMap: Record<
    Status, // key
    { label: string; color: "red" | "violet" | "green" } //value
    > = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
    CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
    return (
        <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    );
};

export default IssueStatusBadge;
