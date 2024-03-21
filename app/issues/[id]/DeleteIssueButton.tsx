"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          color="red"
          onClick={() => console.log("delete issue", issueId)}
        >
          Delete
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title as="h3">Delete Issue</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure do you want to delete this issue
        </AlertDialog.Description>
        <Flex>
          <AlertDialog.Cancel>

            <Button color="gray" variant="soft" >
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>

            <Button color="red" >
              Delete Issue

            </Button>
          </AlertDialog.Action>

        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
