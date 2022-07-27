import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {
   
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    
    
  } from "reactstrap";
  import {  InputLabel, MenuItem, Select } from "@material-ui/core";

function CreateNgoInfo(props) {

   
  const [ngoData, setNgoData] = useState([]);
  const [ngo, setNgo] = useState([]);
  const [ngoId, setNgoId] = useState([]);

  const catchInput =(e)=>{
    
    e.persist();
    setNgoData({
      ...ngoData,
      [e.target.name]: e.target.value,
  });

  }
  const addNgo= async (e)=>{
  e.preventDefault(); 
  const id=props.id
  const ngoIdd=ngoId
  

  e.preventDefault();
  fetch('http://localhost:8000/api/ngoInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({...ngoData ,family_id: id,ngo_id:ngoIdd}),
  }).then((result) => {
    window.location.reload();
    // console.log(result)
  });
  

}

useEffect(async ()=>{
    const getAllUrl = "http://localhost:8000/api/ngo";
    const response = await  fetch(getAllUrl);
    const result = await response.json();
    setNgo(result);
    console.log(ngo);
},[])
// "family_id": "13",
// "ngo_id": "2",
// "child_aid_amount": "1000",
// "total_aid_amount": "10000",
// "ramadan_additional_aid": "100",
// "monthly_warranty": "no",
// "updated_at": "2021-03-05T01:16:26.000000Z",
// "created_at": "2021-03-05T01:16:26.000000Z",
// "id": 9


    return (
        <Form>
             {props.tog?
                <Row>
            <hr className="my-4" />
                  {/* Address */}
                  
                  <div className="pl-lg-4">
                  <h6 className="heading-small text-muted mb-4">
                    NGO Information
                  </h6>
                  <Form >
                    <Row>

                    <Col lg="4">
                      
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="child_aid_amount"
                        >
                          NGOs
                        </label>
                     
                        <Select onChange={(e)=>setNgoId(e.target.value)}>

                            {ngo.data.map((n,key)=>(
                                <option style={{width:"50"}}key={key} value={n.id}>{n.ngo_name}</option>
                            ))}
                            
                        </Select>
                     
                        
                      </FormGroup>
                    </Col>
                      <Col lg="4">
                      
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="child_aid_amount"
                          >
                            Child Aid Amount
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="child_aid_amount"
                            id="child_aid_amount"
                            type="number"
                            onChange={catchInput}
                          />
                       
                          
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="total_aid_amount"
                          >
                            Total Aid Amount
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="total_aid_amount"
                            id="total_aid_amount"
                            type="number"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="ramadan_additional_aid"
                          >
                            Ramadan Additional Aid
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="ramadan_additional_aid"
                            id="ramadan_additional_aid"
                            type="number"
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
                            htmlFor="monthly_warranty"
                          >
                            Monthly Warranty
                          </label>
                       
                          <Input
                            className="form-control-alternative"
                            name="monthly_warranty"
                            id="monthly_warranty"
                            type="text"
                            onChange={catchInput}
                          />
                        </FormGroup>
                      </Col>
                     
                      <Col md="2">
                        <FormGroup>
                          <Input
                            onClick={addNgo}
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



export default CreateNgoInfo

