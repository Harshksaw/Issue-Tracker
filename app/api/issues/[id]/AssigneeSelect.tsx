"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from '../../../../app/components';

const AssigneeSelect = () => {

  const {data: users , error  , isLoading} =useQuery<User[]>({
    queryKey: ['users'],
    queryFn: ()=> axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 120 * 1000, //60s
    retry : 3, //3 time sit s will retry



  });

  if(isLoading) return <Skeleton/>;





  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Trigger>
    </Select.Root>
  );
};

export default AssigneeSelect;
