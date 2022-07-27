import React, { useEffect, useState } from 'react'

import Header from "components/Headers/UserHeader.js";
import { Confirm } from "react-st-modal";


import {
     Button,
     Card,
     CardHeader,
     Table,
     Container,
     Row,
     Col,
     CardFooter,
     Pagination,
     PaginationItem,
     PaginationLink, FormGroup, InputGroup, InputGroupAddon, InputGroupText
   } from "reactstrap";
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, MenuItem,Select } from '@material-ui/core';

function AllFamilies(props) {


   const [families, setFamilies] = useState([]);
   const [searchValue, setSearchValue] = useState();
  const [searchType, setSearchType ]= useState('family_name');
  const [reserveFamilies, setReserveFamilies] = useState([]);

   const [pagination, setPagination] = useState([]);

   const getAllFamilies= async()=>{
     const getAllUrl="http://localhost:8000/api/families-major";
     const response= await fetch(getAllUrl);
     const result= await response.json();
    // console.log(result.data.data);
     setFamilies(result.data.data);
     setReserveFamilies(result.data.data);
    
const arr=[]
arr.push(result.data)
setPagination(arr)
 console.log(pagination);
    
   }
   const nextPage= async (e)=>{
     e.preventDefault();
     const getNextUrl=pagination[0].next_page_url;
     const response= await fetch(getNextUrl);
     const result= await response.json();
     setFamilies(result.data.data);
     const arr=[]
     arr.push(result.data)
     setPagination(arr)
   }
   const prevPage= async (e)=>{
     e.preventDefault();
     // pagination[0].prev_page_url?
     const getPrevUrl=pagination[0].prev_page_url;
     const response= await fetch(getPrevUrl);
     const result= await response.json();
     setFamilies(result.data.data);
     const arr=[]
     arr.push(result.data)
     setPagination(arr)
     
   }


  const deleteRecord = async (id) => {
   // console.log(id)
    const deleteUrl=`http://localhost:8000/api/families-major/${id}`;
    const deleteRequestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },

    };
    const response = await fetch(deleteUrl,deleteRequestOptions);
    const result =  await response.json();  
    console.log(result)
    getAllFamilies()
   
  }
  // const linkTo=(id)=>{
  //   <Link to={`/user-profile/${id}`}></Link>
  // }
  const search = async (e)=>{
    // console.log(searchValue)
    // console.log(searchType)
    if (!searchValue)
    {
      setFamilies(reserveFamilies);
    }
    else
    {
    e.preventDefault();
    const searchUrl=`http://localhost:8000/api/families-major/${searchType}/${searchValue}`
    const response=await fetch(searchUrl);
    const result=await response.json()
    setFamilies(result.data)
    // console.log(result.data)
    // console.log(families)
    }}
 
   useEffect(()=>{
     getAllFamilies()

     
      
   },[]);

     return (
          <>
           <Header />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">
                      Registered Families
                    </h3>
                  </div>
                </Row>
                <Row>
                  <Col lg="2">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Search By</InputLabel>
                  <Select onChange={(event) => setSearchType(event.target.value)}  value={searchType} >
                      <MenuItem value="family_name">Family Name</MenuItem>
                      <MenuItem value="interviewer">Interviewer</MenuItem>
                      <MenuItem value="phone_number">Phone Number</MenuItem>
                      <MenuItem value="husband_name">Husband Name</MenuItem>
                      <MenuItem value="husband_nationality">
                        Husband Nationality
                      </MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                  <Col lg="4" style={{padding:0}}>
                    <FormGroup >
                      <InputGroup className="input-group-alternative" style={{marginTop:15, width:"85%"}}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" />
                            </InputGroupText>
                            <Input placeholder="Search" type="text" 
                              onChange={(event) => setSearchValue(event.target.value)}
                            />
                           <Col>
                            <Button
                              color="primary"
                              onClick={search}
                              size="sm"
                            >
                              Search
                            </Button>
                          </Col>
                        </InputGroupAddon>
                    </InputGroup>
                    </FormGroup>
                  </Col>
                  <div className="col text-right">
                    <Link to={'/admin/index'}>
                       <Button color="primary" size="sm">See all appointments</Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Family Name</th>
                    <th scope="col">family type</th>
                    <th scope="co l">Interviewer</th>                    
                    <th scope="col">Location</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {families.map((family) => (
                    <tr key={family.id}>
    
                        <th scope="row">{family.family_name}</th>
                      <td>{family.families_type.family_type}</td>
                      <td>{family.interviewer}</td>                      
                      <td>{family.area}</td>
                      <Button
                    className="float-left"
                    color="warning"
                    onClick={async () => {
                      const isConfirm = await Confirm(
                        "Are You sure you wish to delete this record? ",
                        "This action cannot be undone"
                      );

                      if (isConfirm) {
                        deleteRecord(family.id);
                      }
                    }}
                    size="sm"
                  >
                   Delete
                  </Button>
                  {/* <Button
                        disabled={disabled !== index}
                          className="float-left"
                          color="default"
                          size="sm"
                          onClick={async () => {
                            const isConfirm = await Confirm(
                              "You Are Editing a House Need ",
                              "Are You Sure?"
                            );

                            if (isConfirm) {
                              editNeed(need.id);
                            }
                          }}
                        >
                          SaveEdit
                        </Button> */}
                      <Link to={`/user-profile/${family.id}`}>
                        <button>View</button>
                      </Link>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem>
                      <PaginationLink
                        onClick={prevPage}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    
                    <PaginationItem>
                      <PaginationLink
                        onClick={nextPage}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllFamilies
