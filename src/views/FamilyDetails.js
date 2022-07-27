import React, { Component } from 'react';
// reactstrap components
import {
    Table,
  } from "reactstrap";


class FamilyDetails extends Component{
    

    constructor(props){
        super(props); 
        this.state={
            family:[],
            children_info:[]
        }
        
    }
   
    async componentDidMount(){
        const id=this.props.match.params.id;
        const getByIdUrl=`http://localhost:8000/api/families-major/${id}`;
        const result= await fetch(getByIdUrl);
        const response=await result.json();
        this.setState({family:response.data});
        this.setState({children_info:response.data.children_info});

        console.log(this.state.family); 
    }

    


    render(){
       

        
        return(
            <div>
                {this.state.family.map(f=>(
                    <div key={f.id}>
                        <h1>{f.family_name}</h1>


                 <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">family_name</th>
                    <th scope="col">interviewer</th>
                    <th scope="col">family_type</th>
                    <th scope="col">code</th>
                    <th scope="col">area</th>
                    <th scope="col">doctor_name</th>
                    <th scope="col">exceptional_families</th>
                    <th scope="col">existing_medical_conditions</th>
                    <th scope="col">family_full_address</th>
                    <th scope="col">health_risk_persons</th>
                    <th scope="col">husband_date_of_birth</th>
                    <th scope="col">husband_idimage</th>
                    <th scope="col">husband_name</th>
                    <th scope="col">husband_nationality</th>
                    <th scope="col">living_with</th>
                    <th scope="col">medical_condition_name</th>
                    <th scope="col">medication_name</th>
                    <th scope="col">medication_price</th>
                    <th scope="col">number_of_residents</th>
                    <th scope="col">phone_number</th>
                    <th scope="col">survey_date</th>
                    <th scope="col">wife_date_of_birth</th>
                    <th scope="col">wife_income</th>
                    <th scope="col">wife_marital_status</th>
                    <th scope="col">wife_nationality</th>
                    <th scope="col">wife_profession</th>
                    <th scope="col">created_at</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.family.map((f) => (
                    <tr key={f.id}>
                      <th scope="row">{f.family_name}</th>
                      <td>{f.interviewer}</td>
                      <td>{f.families_type.family_type}</td>
                      <td>{f.code}</td>
                      <td>{f.area}</td>
                      <td>{f.doctor_name}</td>
                      <td>{f.exceptional_families}</td>
                      <td>{f.existing_medical_conditions}</td>
                      <td>{f.family_full_address}</td>
                      <td>{f.health_risk_persons}</td>
                      <td>{f.husband_date_of_birth}</td>
                      <td>{f.husband_idimage}</td>
                      <td>{f.husband_name}</td>
                      <td>{f.husband_nationality}</td>
                      <td>{f.living_with}</td>
                      <td>{f.medical_condition_name}</td>
                      <td>{f.medication_name}</td>
                      <td>{f.medication_price}</td>
                      <td>{f.number_of_residents}</td>
                      <td>{f.phone_number}</td>
                      <td>{f.survey_date}</td>
                      <td>{f.wife_date_of_birth}</td>
                      <td>{f.wife_income}</td>
                      <td>{f.wife_marital_status}</td>
                      <td>{f.wife_nationality}</td>
                      <td>{f.wife_profession}</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />
                        {f.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

            
                    
                    </div>
                ))}

                
            </div>
        )
    }
}
export default FamilyDetails;