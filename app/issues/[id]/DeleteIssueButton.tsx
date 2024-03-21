"use client";
import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [error , setError] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const DeleteIssue = async()=>{
    try {
      setIsDeleting(true);
      axios.delete('/api/issues/' + issueId).then((res)=>{
        console.log(res)
      })
      router.push('/issues/list')
      router.refresh();
      
    } catch (error) {
      setIsDeleting(false);
      setError(true);
      throw new Error
    }
    
  }

  const router = useRouter();
  return (
    <>
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

            <Button color="red"
            onClick={DeleteIssue}
            disabled={isDeleting}
            >
              Delete Issue
            {isDeleting && <Spinner/>}
            </Button>
          </AlertDialog.Action>

        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>


      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title as="h3" className="mt-2"
          >Error</AlertDialog.Title>
          <AlertDialog.Description>
            There was an error deleting the issue
          </AlertDialog.Description>
          <Flex>
            <AlertDialog.Cancel>
              <Button color="red" variant="soft" onClick={()=>setError(false)}>
                Close
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

    </>
  );
};

export default DeleteIssueButton;
