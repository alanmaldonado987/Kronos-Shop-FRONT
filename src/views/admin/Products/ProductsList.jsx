import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography, Box, Divider } from '@mui/material';
import Stack from "@mui/material/Stack";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import CreateProduct from '../../../components/Modals/CreateProduct';
import { useDispatch, useSelector } from "react-redux";

import { allProducts } from '../../../App/reducers/products/productsSlice';

import { getAllProducts } from '../../../services/GET/GetAllProducts';
import { deleteProduct } from '../../../services/DELETE/deleteProduct';


const ProductsList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadProducts = async () => {
    try {
      const response = await getAllProducts();
      
      dispatch(allProducts({
        products: response.data,
      }))

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    loadProducts();
  }, []);


  const filterData = (v) => {
    // if (v) {
    //   setProductsList([v]);
    // } else {
    //   loadProducts();
    // }
  };

  const deleteApi = async (id) => {
    try {
      await deleteProduct(id);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      console.error("Error delete product:", error);
    }
  };

  const DeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };
  console.log("productos: " ,products.products)
  const rows = products.products;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {rows && rows.length > 0 && (
        <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Buscar Producto" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />} onClick={openModal} >
              Add
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Nombre
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Descripcion
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Categoria
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Precio
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">{row.price}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                            // onClick={() => editUser(row.id)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                DeleteProduct(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      <CreateProduct isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}


export default ProductsList