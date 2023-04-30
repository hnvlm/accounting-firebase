import React, {useRef, useState} from 'react';
import { handleSubmit } from './firebase/BasicOperations';
import { getDocument, getCollection } from './firebase/Get';

// Const and Data
import { collections } from './const/FirebaseConsts';

// MUI
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button, ButtonGroup, TextField}  from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function App() {
  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    const data ={
      name: dataRef.current.value
    }
    handleSubmit(dataRef.current.value, 'test_collection');
    handleSubmit(collections.test, 'test', data);
    dataRef.current.value = ""
  }

  const [demoResponse, setDemoResponse] = useState('No request done yet')

  const getSampleDocument = async()=>{
    setDemoResponse(await getDocument());
  };

  const getSampleCollection = async()=>{
    setDemoResponse(await getCollection());
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <Paper>
              <TextField
                multiline
                value={demoResponse}
              />
              <ButtonGroup variant="contained">
                <Button onClick={getSampleDocument}>Get Document</Button>
                <Button onClick={getSampleCollection}>Get Collection</Button>
              </ButtonGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              Something should be here
              <form onSubmit={submithandler}>
                <input type= "text" ref={dataRef} />
                <button type = "submit">Save</button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
