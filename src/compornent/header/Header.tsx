import { Box } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import {Sidebar} from './sidebar/Sidebar'
import {Navbar} from './Navbar'

const FlexBox = styled(Box)({
  display: "flex",
  backgroundColor: '#EAF3FF',
});

export const Header= (props: any ) => {
  const {children} = props
  return (
    <>
      <Navbar/>
      <FlexBox>
      <Sidebar />
      {children}
      </FlexBox>
    </>
  )
}

