import React from 'react'
import SidaBar from '../../../components/SideBar/SidaBar'
import { Box } from '@mui/material'
import ProductsList from './ProductsList'

const Products = () => {
  return (
    <div style={{width: '100%', display: 'flex'}}>
        <SidaBar />
        <Box sx={{width: '100%', mt: 3}}>
          <Box sx={{display: 'flex'}}>
            <Box sx={{flexGrow: 1, p: 3}}>
              <ProductsList />
            </Box>  
          </Box>
        </Box>
    </div>
  )
}

export default Products 