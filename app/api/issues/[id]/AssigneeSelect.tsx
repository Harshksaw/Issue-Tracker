"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Skeleton } from '../../../../app/components';


const AssigneeSelect = ({issue}: {issue: Issue}) => {

  const {data: users , error  , isLoading} = useUsers();

  if(isLoading) return <Skeleton/>;

  const assignIssue = async(userId: string)=>{

      try {
        await axios.patch(`/api/issues/${issue.id}`,{assignedToUserId:userId || null })
        toast.success("Assignee updated")
        
      } catch (error) {
        toast.error("Failed to update assignee")
        
      }
      

    }
  





  return (
    <>
    <Toaster/>

    <Select.Root 
    defaultValue={issue.assignedToUserId || ""}

    onValueChange={assignIssue}>


      <Select.Trigger>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="">Unassigned</Select.Item>

          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Trigger>
    </Select.Root>
    </>
  );
};

const useUsers = () =>  useQuery<User[]>({
  queryKey: ['users'],
  queryFn: ()=> 
  axios.get<User[]>("/api/users").then((res) => res.data),
  staleTime: 1200 * 1000, //60s
  retry : 3, //3 time sit s will retry



});

export default AssigneeSelect;
