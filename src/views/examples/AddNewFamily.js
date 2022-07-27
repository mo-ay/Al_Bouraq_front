import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// core components
import Header from "components/Headers/UserHeader.js";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";


  const AddNewFamily = (props) => {
 
 const[values,setValues]=useState([]);
  const[lastValue,setLastValue]=useState([]);
  const[data,setData]=useState([]);
  const [house, setHouse] = useState([]); 
  const [need, setNeed] = useState([]); 
  const [status, setStatus] = useState([]);

  const [child, setChild] = useState([]); 
  const [lastChild, setLastChild] = useState([]); 
  const[childData,setChildData]=useState();


  const [familyType, setFamilyType] = useState([])

  useEffect(async ()=>{
    
    const response = await fetch("http://localhost:8000/api/house-type");
    const result = await response.json();
    setHouse(result);
    const needResponse = await fetch("http://localhost:8000/api/houseneed");
    const need = await needResponse.json()
    setNeed(need)
    const statusResponse = await fetch("http://localhost:8000/api/husband-status");
    const status = await statusResponse.json()
    setStatus(status)

  },[familyType]);
  
  const handleChange= async (e)=>{
    
    const name=e.target.name;
    const value=e.target.value
    setValues([...values,{name:name,keyy:value}])

  }

  const onFocusOutInput=  async (e)=>{
  if (values[0]){
    const value=values[values.length-1].keyy;
    const name=values[values.length-1].name;

    setLastValue([...lastValue,{name,value}])
      //console.log(lastValue)
      var arr = lastValue
      var result = {};
      for (var i = 0; i <arr.length; i++) {
        result[arr[i].name] = arr[i].value;
      }
        setData(result)
        console.log(data);
      }
  }

  // const handleChild= async (e)=>{
    
  //   const name=e.target.name;
  //   const value=e.target.value

  //   setChild([...child,{nameChild:name,valueChild:value}])
  //  // console.log("CHILD-STATE|| ",child)

  // }
  // const onFocusOutChild=  async (e)=>{

    
  //   const name=child[child.length-1].nameChild;
  //  const value=child[child.length-1].valueChild;

  //   setLastChild([...lastChild,{name,value}])
  // console.log(lastChild)
  //     var arr = lastChild
  //     var result = {};
  //     for (var i = 0; i <arr.length; i++) {
  //       result[arr[i].name] = arr[i].value;
  //     }
  //       setChildData({"child1":result})
  //      console.log(childData);
  // }

  // const addChild= async (e)=>{
    
  //   setData(childData)
   

   
  //  console.log(data)

  // }


  const createFamily= async()=>{
    
    const url='http://localhost:8000/api/families-major';
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxNDg1NzIxOSwiZXhwIjoxNjE0ODYwODE5LCJuYmYiOjE2MTQ4NTcyMTksImp0aSI6InJKRmZoaVNRVVYwMkY1aGQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.93TRHRj1nlRq2M3BsnMwRTS6oS6_grZ2G_XHQTTkgPQ"

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(        
        data
      )
    };
    
    const response= await fetch(url,requestOptions);
    const result= await response.json();
    console.log(result);

  }

  // {
  //   "family_type_id": "2",
  //    "family_name" : "azar",
  //    "code" :"7777",

  //    "child1":{
  //    "child_name" :"Ali",
  //    "family_name" : "moussa",
  //    "child_gender" : "Male",
  //    "child_date_of_birth" :"1991-02-14 14:27:00",
  //    }
  // }



  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      
        <div >
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Upload New Photo
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-2">
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                 
                   <h2>
                    family exclusive
                  </h2> 
                  
                  <h2>
                   code
                  </h2>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Assigned Interviewer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="2">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col lg="6">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Choose a Family Type</InputLabel>
                  <Select name='family_type_id' 
                  onChange={handleChange}
                  onClick={(e) => setFamilyType(e.target.value)}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">Exceptional Family</MenuItem>
                      <MenuItem value="2">Lebanese Family</MenuItem>
                      <MenuItem value="3">Syrian Family</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Button
                    className="float-left"
                    color="default"
                    href="#pablo"
                    onKeyDown={(e) => e.preventDefault()}
                    size="sm"
                  >
                   Delete Profile
                  </Button>
                    <Link to={'/admin/all-families'}>View All Families</Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     
                        <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="family_name">
                            Family Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="family_name"
                            name="family_name"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                           
                            type="text"
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup> 
                          <label
                            className="form-control-label"
                            htmlFor="code"
                          >
                            Family Code
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="code"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                            id="code"
                            
                            type="text"
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="doctor_name"
                          >
                            Assigned Doctor
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                            name='doctor_name'
                            id="doctor_name"
                            
                            type="text"
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>        
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="survey date"
                          >
                            Survey Date
                          </label>
                          <Input
                            className="form-control-alternative"
                          
                            id="survey date"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                            name='survey_date'
                            type="date"
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="phone_number"
                          >
                            Phone
                          </label>
                          <Input
                          className="form-control-alternative"
                          onChange={handleChange}
                          onBlur={onFocusOutInput}
                           name='phone_number'
                            id="phone_number"                            
                            type="phone"
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_date_of_birth'"
                          >
                           Wife Date of Birth
                          </label>
                          <Input
                       className="form-control-alternative"
                       onChange={handleChange}
                       onBlur={onFocusOutInput}
                       name='wife_date_of_birth'
                       type="date"
                       id="wife_date_of_birth"
                          />
                        </FormGroup>
                      </Col>
                    </Row>                
                  </div>


                  
                  {/* Address */}                          
                  {familyType == 2 || familyType ==3 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                    Exclusive WIfe Additional Information
                  </h6>
                    <Row>
                      
                    <Col lg="6">
                  <FormControl style={{width:180}}>
                  <InputLabel  >In need of work?</InputLabel>
                  <Select name='wife_work_need' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_work_need_desc"
                          >
                            Work Need
                          </label>
                         
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                             name='wife_work_need_desc'
                            id="wife_work_need_desc"
                            type="text"
                            
                            
                          />
                        
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_education_level'"
                          >
                            Education Level
                          </label>
                     
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                             name='wife_education_level'
                            id="wife_education_level'"
                            type="number"
                            
                            
                          />
                      
                          
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_clothes_type"
                          >
                            Clothes
                          </label>
                        
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                             name='wife_clothes_type'
                            id="wife_clothes_type"
                            type="text"
                            
                            
                          />
                          
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_clothes_size"
                          >
                            Clothes Size
                          </label>
                         
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                             name='wife_clothes_size'
                            id="wife_clothes_size"
                            type="number"
                            
                            
                          />
                        
                        </FormGroup>
                      </Col>
                    
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_shoe_size"
                          >
                            Shoe Size
                          </label>
                         
                         
                          <Input
                            className="form-control-alternative"
                            onChange={handleChange}
                            onBlur={onFocusOutInput}
                            name='wife_shoe_size'
                            id="wife_shoe_size"
                            type="number"
                                                    
                          />
                         
                        </FormGroup>
                      </Col>
                </Row>
                  </div> : ""
  }


            
                  {/* Address */}
                  {familyType == 2 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Lebanese Wife Additional Details
                  </h6>
                    <Row>
                    <Col lg="4">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Has Car?</InputLabel>
                  <Select name='existing_car' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="car_owner"
                          >
                            Car Owner
                          </label>
                          <Input
                       className="form-control-alternative"
                       onChange={handleChange}
                       onBlur={onFocusOutInput}
                       name='car_owner'
                       id="car_owner"
                       
                       type="text"
                       
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="car_desc"
                          >
                            Car Make
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='car_desc'
                              id="car_desc"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col lg="4">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Has Gold?</InputLabel>
                  <Select name='wife_gold_assets' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_gold_quantity'"
                          >
                            Has Quantity?
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_gold_quantity'
                              id="wife_gold_quantity'"
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_gold_assets_desc"
                          >
                            Gold Assets Description
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_gold_assets_desc'
                              id="wife_gold_assets_desc"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="gold_retain_desc"
                          >
                            Gold Retain Reason
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='gold_retain_desc'
                              id="gold_retain_desc'"
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_other_assets"
                          >
                            Other Assets 
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_other_assets'
                              id="wife_other_assets"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_other_assets_value"
                          >
                            Other Assets Value
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_other_assets_value'
                              id="wife_other_assets_value"
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                </Row>
                  </div> :""
  }




            {/* syrian wife info */}
                
                  {/* Address */}
              {familyType == 3 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Syrian Wife Additional Details
                  </h6>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_un_number"
                          >
                            UN Number
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_un_number'
                              id="wife_un_number"
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    
                      <Col lg="3">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Has Debt?</InputLabel>
                  <Select name='family_debt' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="family_debt_desc"
                          >
                            Debt Reason
                          </label>
                          <Input
                       className="form-control-alternative"
                       onChange={handleChange}
                       onBlur={onFocusOutInput}
                       name='family_debt_desc'
                       id="family_debt_desc"
                       
                       type="text"
                       
                          />
                        </FormGroup>
                      </Col>                     
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="family_debt_amount'"
                          >
                            Debt Amount
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='family_debt_amount'
                              id="family_debt_amount'"
                              
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_in_lebanon_since"
                          >
                           In Lebanon Since?
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_in_lebanon_since'
                              id="wife_in_lebanon_since"
                              
                              type="date"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="sponsored_since"
                          >
                            Sponsored Since
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='sponsored_since'
                              id="sponsored_since"
                              
                              type="date"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Applied for immigration?</InputLabel>
                  <Select name='wife_migration_request' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>

                  {/* -------------------------------------------------Image convert input type to file when backedn is ready------------------------------------------------------------ */}
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_migration_request_image"
                          >
                            Immigration form
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_migration_request_image'
                              id="wife_migration_request_image"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </div>: ""
  }


               {/* exceptional family wife info */}
                
                  {/* Address */}
                  {familyType == 1 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Exceptional Family Wife Additional Details
                  </h6>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_name'"
                          >
                            First Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_name'
                              id="wife_name'"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_father_name"
                          >
                            Middle Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_father_name'
                              id="wife_father_name"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="wife_sur_name"
                          >
                            Last name
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='wife_sur_name'
                              id="wife_sur_name"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                </Row>
                    <Row>
                    <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="children_number"
                          >
                            Number of Children
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='children_number'
                              id="children_number"
                              
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="smokers_in_house"
                          >
                            Number of smokers
                          </label>
                          <Input
                       className="form-control-alternative"
                       onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='smokers_in_house'
                       id="smokers_in_house"
                       
                       type="number"
                       
                          />
                        </FormGroup>
                      </Col>                                    
                    </Row>
                    <Row>
                    <Col lg="3">
                  <FormControl style={{width:180}}>
                  <InputLabel  >Incoming Aid?</InputLabel>
                  <Select value="0" name='other_aid' 
                  onChange={handleChange}
                  onBlur={onFocusOutInput} >
                      <MenuItem value="1">YES</MenuItem>
                      <MenuItem value="0">NO</MenuItem>
                      </Select>
                      </FormControl>
                  </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="other_aid_description"
                          >
                            Description
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='other_aid_description'
                              id="other_aid_description"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="family_comment"
                          >
                            Additional Comments
                          </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="A few words about you ..."
                              rows="6"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='family_comment'
                              type="family_comment"
                            />
                    </FormGroup>
                      </Col>
                    </Row>
                </div> : ""
  }



                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    House information
                  </h6>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                    <Row>
                    
                      <Col lg="4">
                       <form method='GET'>
                         {house.map((h,key)=>(
                           <div key={key}>
                        <input type="checkbox" id="houset" name={'houset'+(key+1)+'[house_type_id]'} onClick={handleChange}
                                onBlur={onFocusOutInput} value={h.id}/>
                        <label htmlFor="houset">{h.house_type_name}</label>
                       </div> ))}
                      </form>
                      </Col>
                      <Col lg="4">
                       <form method='GET'>
                         {need.map((n,key)=>(
                           <div key={key}>
                        <input type="checkbox" id="housen" name={'housen'+(key+1)+'[house_need_id]'} onClick={handleChange}
                                onBlur={onFocusOutInput} value={n.id}/>
                        <label htmlFor="housen">{n.house_need_name}</label>
                       </div> ))}
                      </form>
                      </Col>
                      <Col lg="4">
                       
                       <form method='GET'>
                       
                         {status.map((s,key)=>(
                           <div key={key}>
                        <input type="checkbox" id="husbands" name={'husbands'+(key+1)+'[husband_status_id]'} onClick={handleChange}
                                onBlur={onFocusOutInput} value={s.id}/>
                        <label htmlFor="husbands">{s.husband_status_name}</label>
                       </div> ))}
                      </form>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="number_of_residents"
                          >
                             Number of Residents
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='number_of_residents'
                              id="number_of_residents"
                              
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                                         
                      
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="living_with'"
                          >
                            Living With
                          </label>
                          <Input
                              className="form-control-alternative"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              name='living_with'
                              id="living_with'"
                              
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="existing_medical_conditions"
                          >
                            Sick people in house?
                          </label>
                         <select name="existing_medical_conditions"
                          onChange={handleChange}
                          onBlur={onFocusOutInput}>
                           <option value="1">YES</option>
                           <option value="0">NO</option>

                         </select>
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medical_condition_name"
                          >
                            Medical Condition name
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medical_condition_name"
                              name="medical_condition_name"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="health_risk_persons"
                          >
                            Who is sick?
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="health_risk_persons"
                              name= "health_risk_persons"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medication_name"
                          >
                            Medications
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medication_name"
                              name = "medication_name"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medication_price"
                          >
                            Medication Price
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medication_price"
                              name="medication_price"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                          <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="housen"
                            >
                              Need 
                            </label>
                            <Input
                                className="form-control-alternative"
                                
                                id="housen"
                                name="housen"
                                onChange={handleChange}
                              onBlur={onFocusOutInput}
                                type="text"
                                
                            />
                          </FormGroup>
                        </Col>
                        

                    </Row>
                   
                    <Row>
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="family_comment"
                          >
                            Additional Comments
                          </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="A few words about you ..."
                              id="family_comment"
                              name="family_comment"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              rows="6"
                              
                              type="textarea"
                            />
                    </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>


                  
                  {/* Address */}
                  {familyType == 2 || familyType ==3  ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    House Exclusive Information
                  </h6>
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="house_condition"
                          >
                            House Condition
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="house_condition"
                              name="house_condition"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>                   
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="house_value"
                          >
                             House Value
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="house_value"
                              name="house_value"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="rent_contributor"
                          >
                            Rent Contributors
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="rent_contributor"
                              name="rent_contributor"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="pending_bills"
                          >
                            Pending Bills
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="pending_bills"
                              name="pending_bills"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="electricity_bill"
                          >
                            Electric Bill
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="electricity_bill"
                              name="electricity_bill"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="water_bill"
                          >
                            Water
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="water_bill"
                              name="water_bill"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="internet_bill"
                          >
                            Internet
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="internet_bill"
                              name="internet_bill"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="generator_bill"
                          >
                            Generator
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="generator_bill"
                              name="generator_bill"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="distribution_point"
                          >
                            Distribution Point
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="distribution_point"
                              name="distribution_point"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="smokers_in_house"
                          >
                            Smokers?
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="smokers_in_house"
                              name="smokers_in_house"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">

                        {/* <!--------------------------------COME BACK LATER--------------------------------------------!> */}
                        {/* <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medication_sponsor"
                          >
                            Medication Sponsor?
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medication_sponsor"
                              name="medication_sponsor"
                              type="text"
                              
                          />
                        </FormGroup> */}



                      </Col>
                      </Row>
                      <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medication_sponsor"
                          >
                            Medication Sponsor Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medication_sponsor"
                              name="medication_sponsor"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="medication_sponsor_amount"
                          >
                            Medication Price
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="medication_sponsor_amount"
                              name="medication_sponsor_amount"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div> : ""
  }
          {/* -------------------------Husband Major Info----------------------- */}



          
                  {/* Address */}
                
                  <div className="pl-lg-4">
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                   Husband Information
                  </h6>
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_name"
                          >
                            Husband Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_name"
                              name="husband_name"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>                   
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_nationality"
                          >
                             Husband Nationality
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_nationality"
                              name="husband_nationality"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_date_of_birth"
                          >
                          Date Of Birth
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_date_of_birth"
                              name="husband_date_of_birth"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_idimage"
                          >
                            ID Image
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_idimage"
                              name="husband_idimage"
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                     
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husbands"
                          >
                            Husband Status
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husbands"
                              name="husbands"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

          {/* ---------------------------Husband Lebanese Info---------------------------- */}

          
                  {/* Address */}
                  {familyType == 2 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                   Lebanese Husband Information
                  </h6>
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_profession"
                          >
                            Husband Profession
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_profession"
                              name="husband_profession"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>                   
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_income"
                          >
                             Husband Income
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_income"
                              name="husband_income"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_assets"
                          >
                          Assets
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_assets"
                              name="husband_assets"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_debt"
                          >
                            Debt
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_debt"
                              name="husband_debt"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_debt_amount"
                          >
                            Debt Amount
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_debt_amount"
                              name="husband_debt_amount"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_debt_desc"
                          >
                            Debt Description
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_debt_desc"
                              name="husband_debt_desc"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_shoe_size"
                          >
                            Shoe Size
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_shoe_size"
                              name="husband_shoe_size"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div> : ""
  }

                    {/* ------------------------------Husband Exceptional family Info--------------------------- */}


                    
                  {/* Address */}
                  {familyType == 1 ?
                  <div className="pl-lg-4">
                    <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                   Exceptional Family Husband Information
                  </h6>
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_profession"
                          >
                            Husband Profession
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_profession"
                              name="husband_profession"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="text"
                              
                          />
                        </FormGroup>
                      </Col>                   
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="husband_income"
                          >
                             Husband Income
                          </label>
                          <Input
                              className="form-control-alternative"
                              
                              id="husband_income"
                              name="husband_income"
                              onChange={handleChange}
                              onBlur={onFocusOutInput}
                              type="number"
                              
                          />
                        </FormGroup>
                      </Col>
                    
                    </Row>
                  </div>: ""
  }

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Children</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Family Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Status</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Education Level</th>
                    <th scope="col">Income</th>
                    <th scope="col">Education Aid</th>
                    <th scope="col">School Fees</th>
                    <th scope="col">School Name</th>
                    <th scope="col">Child Comment</th>
                    
                    
                  </tr>
                </thead>
               
                <tbody>
                  
                  <>
                    <tr >
                    {/* <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="align-items-center">
                         
                          </span>
                        </Media>
                      </Media>
                    </th> */}

                    {/* 
                     {
         "family_type_id": "2",
          "family_name" : "azar",
          "code" :"7777",

          "child1":{
          "child_name" :"Ali",
          "family_name" : "moussa",
          "child_gender" : "Male",
          "child_date_of_birth" :"1991-02-14 14:27:00",
          }
       } */}
                    <td>
                      <input 
                             className="align-items-center"
                             name="child_name"
                             //onChange={handleChild}
                             //onBlur={onFocusOutChild}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="family_name"
                             //onChange={handleChild}
                            // onBlur={onFocusOutChild}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_gender"
                            // onChange={handleChild}
                            // onBlur={onFocusOutChild}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_date_of_birth"
                            // onChange={handleChild}
                            // onBlur={onFocusOutChild}
                             type="date"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_status"
                             //onChange={handleChild}
                            // onBlur={onFocusOutChild}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_profession"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_education_level"
                            // onChange={handleChild}
                            // onBlur={onFocusOutInput}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_income"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="number"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="educational_aid"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="number"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="school_fees"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="number"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="school_name"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="text"
                             />
                    </td>
                    <td>
                    <input 
                             className="align-items-center"
                             name="child_comment"
                            // onChange={handleChild}
                             //onBlur={onFocusOutInput}
                             type="text"
                             />
                    </td>
                    <td className="text-right">

                      {/* <Button onClick={addChild}>ADD CHILD</Button> */}
                      {/* <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown> */}
                    </td>
                  </tr>
                  </>
                    
                </tbody>
                
              </Table>
              
            </Card>
          </div>
        </Row>

        {/* -----------------------------------------------------------Ngo Information List---------------------------------------------------------- */}

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Ngo Information</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Aid per child</th>
                    <th scope="col">Total aid amount</th>
                    <th scope="col">Ramadan Additional aid</th>
                    <th scope="col">Monthly Warranty</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col" />
                  </tr>
                </thead>
               
                <tbody>
                
                  <>
                    <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="align-items-center">
                         nnn
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>aam</td>
                    <td>
                    <div className="align-items-center">
                    ttt
                      </div>
                    </td>
                    <td>
                      <div className="align-items-center">
                      rrr
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                       mmm
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  </>
                    
                </tbody>
                
              </Table>
              
            </Card>
          </div>
        </Row>









        <Row>
            <Col lg="7" md="10">
            <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Additional Notes</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col lg="7" md="10">
              <Button
                color="info"
                href="#pablo"
                onClick={createFamily}
              >
                Save
              </Button>
            </Col>
          </Row>
          </div>
        
      </Container>
      
    </>
  );
};

export default AddNewFamily;
