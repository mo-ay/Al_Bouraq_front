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

const HouseTypes = (props) => {
  const [types, setTypes] = useState([]);
  const [houseType, setHouseType] = useState([]);
  const [houseTypeMessage, setHouseTypeMessage] = useState([]);

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(-1);

  const onDismiss = () => setVisible(false);
  const handleGameClick = (index) => {
    setDisabled(index);
  };

  const getTypes = async () => {
    const getAllUrl = "http://localhost:8000/api/house-type";
    const response = await fetch(getAllUrl);
    const result = await response.json();
    setTypes(result);
    console.log(types);
  };

  const AddHouseType = async () => {
    const typeRequestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        house_type_name: houseType,
      }),
    };

    const typeUrl = `http://localhost:8000/api/house-type`;
    const response = await fetch(typeUrl, typeRequestOptions);
    const result = await response.json();
    console.log(result);
    setHouseType("");
    setHouseTypeMessage(result.message);
    setVisible(true);
    getTypes();
  };

  
  const editType = async (id) => {
    console.log(id);

    const editUrl = `http://localhost:8000/api/house-type/${id}`;
    const editRequestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        house_type_name: houseType,
      }),
    };
    const response = await fetch(editUrl, editRequestOptions);
    const result = await response.json();
    console.log(result)

    // console.log(result);
    setDisabled(false);
  };

  const deleteRecord = async (id) => {
    const deleteUrl = `http://localhost:8000/api/house-type/${id}`;

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
                Add a house need
              </label>
              <Input
                className="form-control-alternative"
                onChange={(event) => setHouseType(event.target.value)}
                value={houseType}
                id="houseType"
                name="houseType"
                placeholder="Type"
                type="text"
              />
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {houseTypeMessage}
              </Alert>

              <Button color="info" onClick={AddHouseType}>
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <div>
              <label htmlFor="needs">Existing House Types </label>
            </div>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">House Type Name</th>
                </tr>
              </thead>
              <tbody>
                {types.map((type, index) => (
                  <tr key={index}>
                    <>
                      <th scope="row">
                        <input
                          onChange={(event) => setHouseType(event.target.value)}
                          defaultValue={type.house_type_name}
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
                              "You Are Editing a House Type ",
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
export default HouseTypes;
