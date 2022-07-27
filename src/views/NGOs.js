import React, { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import UserHeader from "components/Headers/UserHeader.js";
import { Confirm } from "react-st-modal";

import {
  Button,
  Alert,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

const NGOs = (props) => {
  const [types, setTypes] = useState([]);
  const [ngoType, setNgoType] = useState();
  const [ngoTypeMessage, setNgoTypeMessage] = useState([]);

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(-1);

  const onDismiss = () => setVisible(false);
  const handleGameClick = (index) => {
    setDisabled(index);
  };

  const getTypes = async () => {
    const getAllUrl = "http://localhost:8000/api/ngo";
    const response = await fetch(getAllUrl);
    const result = await response.json();
    setTypes(result.data);
    console.log(types);
  };

  const AddNgoType = async () => {
    const typeRequestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        ngo_name: ngoType,
      }),
    };

    const typeUrl = `http://localhost:8000/api/ngo`;
    const response = await fetch(typeUrl, typeRequestOptions);
    const result = await response.json();
    console.log(result);
    setNgoType("");
    setNgoTypeMessage(result.message);
    setVisible(true);
    getTypes();
  };

  
  const editType = async (id) => {
    console.log(id);

    const editUrl = `http://localhost:8000/api/ngo/${id}`;
    const editRequestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        ngo_name: ngoType,
      }),
    };
    
    const response = await fetch(editUrl, editRequestOptions);
    const result = await response.json();
    console.log(result)

    // console.log(result);
    setDisabled(false);
  };

  const deleteRecord = async (id) => {
    const deleteUrl = `http://localhost:8000/api/ngo/${id}`;

    const deleteRequestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },

    };

    const response = await fetch(deleteUrl, deleteRequestOptions);
    console.log(response);
    // const result =  await response.json()
    getTypes();

  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <>
      <UserHeader />
      <Container fluid>
        <Row>
          <Col lg="6">
            <FormGroup method="POST">
              <label className="form-control-label" htmlFor="houseNeed">
                Add a new NGO
              </label>
              <Input
                className="form-control-alternative"
                onChange={(event) => setNgoType(event.target.value)}
                value={ngoType}
                id="ngoType"
                name="ngoType"
                placeholder="Type"
                type="text"
              />
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {ngoTypeMessage}
              </Alert>

              <Button color="info" onClick={AddNgoType}>
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <div>
              <label htmlFor="needs">Existing Ngos </label>
            </div>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Ngo Name</th>
                </tr>
              </thead>
              <tbody>
                {types.map((type, index) => (
                  <tr key={index}>
                    <>
                      <th scope="row">
                        <input
                          onChange={(event) => setNgoType(event.target.value)}
                          defaultValue={type.ngo_name}
                          disabled={disabled !== index}
                        />
                      </th>
                      <td>
                        <Button
                          className="float-left"
                          color="warning"
                          onClick={async () => {
                            deleteRecord(type.id);
                          }}
                          size="sm"
                        >
                          Delete
                        </Button>

                        <Button
                          color="primary"
                          size="sm"
                          onClick={(e) => handleGameClick(index)}
                        >
                          {" "}
                          Edit
                        </Button>

                        <Button
                         disabled={disabled !== index}
                          className="float-left"
                          color="default"
                          size="sm"
                          onClick={async () => {
                            const isConfirm = await Confirm(
                              "You Are Editing an Ngo ",
                              "Are You Sure?"
                            );

                            if (isConfirm) {
                              editType(type.id);
                            }
                          }}
                        >
                          SaveEdit
                        </Button>
                      </td>
                    </>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NGOs;
