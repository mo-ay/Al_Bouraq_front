import React, {useState} from 'react'
import PropTypes from 'prop-types'
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
  import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function CreateChild(props) {

   
  const [childData, setChildData] = useState([]);
  const catchInput =(e)=>{
    
    e.persist();
    setChildData({
      ...childData,
      [e.target.name]: e.target.value,
  });

  }
  const addChild= async (e)=>{
  e.preventDefault(); 
  const id=props.id

  e.preventDefault();
  fetch('http://localhost:8000/api/children-info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({...childData ,family_id: id}),
  }).then((result) => {
    window.location.reload();
    // console.log(result)
  });
  
}


    return (
        <Form>
             {props.tog?
                <Row>
            <hr className="my-4" />
                  {/* Address */}
                  
                  <div className="pl-lg-4">
                  <h6 className="heading-small text-muted mb-4">
                    Child Information
                  </h6>
                  <Form >
                    <Row>
                      <Col lg="4">
                      
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="child_name"
                          >
                            Name
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_name"
                            id="child_name"
                            type="text"
                            onChange={catchInput}
                          />
                       
                          
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="family_name"
                          >
                            Family name
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="family_name"
                            id="family_name"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_gender"
                          >
                            Gender
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_gender"
                            id="child_gender"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_date_of_birth"
                          >
                            Date of birth
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_date_of_birth"
                            id="child_date_of_birth"
                            type="date"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_status"
                          >
                            status
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_status"
                            id="child_status"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_profession"
                          >
                            Profession
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_profession"
                            id="child_profession"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_education_level"
                          >
                            Education Level
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_education_level"
                            id="child_education_level"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="child_income"
                          >
                            Income
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_income"
                            id="child_income"
                            type="number"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="educational_aid"
                          >
                            Educational Aid Amount
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="educational_aid"
                            id="educational_aid"
                            type="number"
                            onChange={catchInput}
                          />
                           <label
                            className="form-control-label"
                            htmlFor="school_fees"
                          >
                            School Fees
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="school_fees"
                            id="school_fees"
                            type="number"
                            onChange={catchInput}
                          /> 
                          <label
                          className="form-control-label"
                          htmlFor="school_name"
                        >
                          School Name
                        </label>
                     
                        <Input
                          className="form-control-alternative"
                          name="school_name"
                          id="school_name"
                          type="text"
                          onChange={catchInput}
                        />
                         <label
                        className="form-control-label"
                        htmlFor="child_comment"
                      >
                        Other Comment
                      </label>
                   
                      <Input
                        className="form-control-alternative"
                        name="child_comment"
                        id="child_comment"
                        type="text"
                        onChange={catchInput}
                      />
                        </FormGroup>

                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Input
                            onClick={addChild}
                            type="submit"
                            value="Submit"
                          />
                        </FormGroup>
                      </Col>

                </Row>
                </Form>
                  </div>

        </Row>:""}
        </Form>
    )
}



export default CreateChild

