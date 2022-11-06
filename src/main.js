import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(Title, Subtitle, isbn13, Price, Image, Url) {
  return { Title, Subtitle, isbn13, Price, Image, Url };
}

const rows = [
  createData(
    "Intermediate Statistics with R",
    "",
    1001651662833,
    "$0.00",
    "https://itbook.store/img/books/1001651662833.png",
    "https://itbook.store/books/1001651662833"
  ),
  createData(
    "Microsoft Excel Data Analysis and Business Modeling, 7th Edition",
    "Office 2021 and Microsoft 365",
    "9780137613663",
    "$34.87",
    "https://itbook.store/img/books/9780137613663.png",
    "https://itbook.store/books/9780137613663"
  ),
  createData(
    "Microsoft Excel Step by Step",
    "Office 2021 and Microsoft 365",
    "9780137564279",
    "$30.32",
    "https://itbook.store/img/books/9780137564279.png",
    "https://itbook.store/books/9780137564279"
  ),
  createData(
    "Microsoft Office Inside Out",
    "Office 2021 and Microsoft 365",
    "9780137564095",
    "$36.93",
    "https://itbook.store/img/books/9780137564095.png",
    "https://itbook.store/books/9780137564095"
  ),
  createData(
    "Windows Internals, Part 2, 7th Edition",
    "",
    "9780135462409",
    "$53.49",
    "https://itbook.store/img/books/9780135462409.png",
    "https://itbook.store/books/9780135462409"
  )
];

export default function Body() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontFamily:'sans-serif' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "td, th": { border: 2, borderColor:'#fff'},"th":{fontSize: 24, color:'white', bgcolor:'black'}}}>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Subtitle</TableCell>
            <TableCell align="center">ISBN13</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Title} sx={{ "td, th": { border: 2, fontSize:20, bgcolor: '#b9b7bd',borderColor:'#fff' } }}>
              <TableCell component="th" scope="row">
                {row.Title}
              </TableCell>
              <TableCell align="left">{row.Subtitle}</TableCell>
              <TableCell align="left">{row.isbn13}</TableCell>
              <TableCell align="left">{row.Price}</TableCell>
              <TableCell align="center">
                <img src={row.Image}></img>
              </TableCell>
              <TableCell align="center">
                <a href={row.Url}>{row.Url}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
