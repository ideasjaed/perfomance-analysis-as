import {
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  tableCellClasses,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useProducts from "../hooks/useProducts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#A6A6A7",
    color: "#01172C",
    borderRadius: "0",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Montserrat",
    height: "35px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    color: "#565657",
    fontFamily: "Montserrat",
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#E9E9E9",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableProducts = () => {
  const { loading, error, products } = useProducts();

  if (!products) {
    return (
      <>
        {loading && "loader"}
        {error && { error }}
      </>
    );
  }
  return (
    <>
      <Box className="containerTableProducts">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="subtitle">Comparative Analysis</p>
            <TableContainer className="containerProducts" component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nombre</StyledTableCell>
                    <StyledTableCell align="right">SKU</StyledTableCell>
                    <StyledTableCell align="right">% Presencia</StyledTableCell>
                    <StyledTableCell align="right">Av. Price</StyledTableCell>
                    <StyledTableCell align="right">
                      Av. Position
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        align="right"
                        className="rowImageProduct"
                      >
                        <img
                          src={row.productImage}
                          alt={row.name}
                          className="imageProduct"
                        />
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.sku}</StyledTableCell>

                      <StyledTableCell align="right">
                        <span
                          style={{
                            color: row.persistence < 0 ? "#D6215B" : "#23B794",
                          }}
                        >
                          {row.persistence * 100} %
                        </span>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        ${row.averagePrice}.00
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.averagePosition}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TableProducts;
