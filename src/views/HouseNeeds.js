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

const HouseNeeds = (props) => {
  const [needs, setNeeds] = useState([]);
  const [houseNeed, setHouseNeed] = useState([]);
  const [houseNeedMessage, setHouseNeedMessage] = useState([]);

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(-1);

  const onDismiss = () => setVisible(false);
  const handleGameClick = (index) => {
    setDisabled(index);
  };

  const getNeeds = async () => {
    const getAllUrl = "http://localhost:8000/api/houseneed";
    const response = await fetch(getAllUrl);
    const result = await response.json();
    setNeeds(result);
    console.log(needs);
  };

  const AddHouseNeed = async () => {
    const needRequestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        house_need_name: houseNeed,
      }),
    };

    const needUrl = `http://localhost:8000/api/houseneed`;
    const response = await fetch(needUrl, needRequestOptions);
    const result = await response.json();
    console.log(result);
    setHouseNeed("");
    setHouseNeedMessage(result.message);
    setVisible(true);
    getNeeds();
  };

  
  const editNeed = async (id) => {
    console.log(id);

    const editUrl = `http://localhost:8000/api/houseneed/${id}`;
    const editRequestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        house_need_name: houseNeed,
      }),
    };
    const response = await fetch(editUrl, editRequestOptions);
    const result = await response.json();
    console.log(result)

    // console.log(result);
    setDisabled(false);
  };

  const deleteRecord = async (id) => {
    const deleteUrl = `http://localhost:8000/api/houseneed/${id}`;

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
    getNeeds();
  };

  useEffect(() => {
    getNeeds();
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
                onChange={(event) => setHouseNeed(event.target.value)}
                value={houseNeed}
                id="houseNeed"
                name="houseNeed"
                placeholder="Need"
                type="text"
              />
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {houseNeedMessage}
              </Alert>

              <Button color="info" onClick={AddHouseNeed}>
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <div>
              <label htmlFor="needs">Existing Needs </label>
            </div>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Needs Name</th>
                </tr>
              </thead>
              <tbody>
                {needs.map((need, index) => (
                  <tr key={index}>
                    <>
                      <th scope="row">
                        <input
                          onChange={(event) => setHouseNeed(event.target.value)}
                          defaultValue={need.house_need_name}
                          disabled={disabled !== index}
                        />
                      </th>
                      <td>
                        <Button
                          className="float-left"
                          color="warning"
                          onClick={async () => {
                            deleteRecord(need.id);
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
                              "You Are Editing a House Need ",
                              "Are You Sure?"
                            );

                            if (isConfirm) {
                              editNeed(need.id);
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
export default HouseNeeds;
