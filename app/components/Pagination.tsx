import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowDownIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface Props{
    itemCount: number;
    pageSize: number;
    currentPage: number;

}

const Pagination = ({itemCount, pageSize, currentPage}: Props) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount <= 1) return null;

    const router = useRouter();
    const searchParams = useSearchParams();

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.push('?' + params.toString());

    }

  return (
    <Flex align='center' gap="2"> 
       <Button color='gray' disabled={currentPage === 1} variant='soft'
        onClick={()=>  changePage(1)}
        >


<DoubleArrowLeftIcon />


        </Button>
        <Button color='gray' disabled={currentPage === 1} variant='soft'
        onClick={()=>  changePage(currentPage - 1)}
        >


<ChevronLeftIcon />


        </Button>
        <Text> Page {currentPage} of {pageCount} </Text>
     
        <Button color='gray' disabled={currentPage === pageCount} variant='soft'
        onClick={()=>  changePage(currentPage + 1)}
        >
            <ChevronRightIcon/>
        </Button>
        <Button color='gray' disabled={currentPage === pageCount} variant='soft'
        onClick={()=>  changePage(pageCount)}
        >
            <DoubleArrowRightIcon/>
        </Button>
    </Flex>
  )
}

export default Pagination