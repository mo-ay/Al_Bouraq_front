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

const HusbandStatuses = (props) => {
  const [statuses, setStatus] = useState([]);
  const [statusType, setStatusType] = useState([]);
  const [statusTypeMessage, setStatusTypeMessage] = useState([]);

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(-1);

  const onDismiss = () => setVisible(false);
  const handleGameClick = (index) => {
    setDisabled(index);
  };

  const getStatuses = async () => {
    const getAllUrl = "http://localhost:8000/api/husband-status";
    const response = await fetch(getAllUrl);
    const result = await response.json();
    setStatus(result);
    console.log(statuses);
  };

  const AddStatusType = async () => {
    const typeRequestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        husband_status_name:statusType,
      }),
    };

    const typeUrl = `http://localhost:8000/api/husband-status`;
    const response = await fetch(typeUrl, typeRequestOptions);
    const result = await response.json();
    console.log(result);
    setStatusType("");
    setStatusTypeMessage(result.message);
    setVisible(true);
    getStatuses();
  };

  
  const editStatus = async (id) => {
    console.log(id);

    const editUrl = `http://localhost:8000/api/husband-status/${id}`;
    const editRequestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        husband_status_name: statusType,
      }),
    };
    const response = await fetch(editUrl, editRequestOptions);
    const result = await response.json();
    console.log(result)

    // console.log(result);
    setDisabled(false);
  };

  const deleteRecord = async (id) => {
    const deleteUrl = `http://localhost:8000/api/husband-status/${id}`;

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
    getStatuses();
  };

  useEffect(() => {
    getStatuses();
  }, []);

  return (
    <>
      <UserHeader />
      <Container fluid>
        <Row>
          <Col lg="6">
            <FormGroup method="POST">
              <label className="form-control-label" htmlFor="statusType">
                Add a new Husband Status
              </label>
              <Input
                className="form-control-alternative"
                onChange={(event) => setStatusType(event.target.value)}
                value={statusType}
                id="statusType"
                name="statusType"
                placeholder="Type"
                type="text"
              />
              <Alert color="info" isOpen={visible} toggle={onDismiss}>
                {statusTypeMessage}
              </Alert>

              <Button color="info" onClick={AddStatusType}>
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <div>
              <label htmlFor="statuses">Existing STatusess </label>
            </div>

            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Ngo Name</th>
                </tr>
              </thead>
              <tbody>
                {statuses.map((status, index) => (
                  <tr key={index}>
                    <>
                      <th scope="row">
                        <input
                          onChange={(event) => setStatusType(event.target.value)}
                          defaultValue={status.husband_status_name}
                          disabled={disabled !== index}
                        />
                      </th>
                      <td>
                        <Button
                          className="float-left"
                          color="warning"
                          onClick={async () => {
                            deleteRecord(status.id);
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
                              "You Are Editing A Husband Status ",
                              "Are You Sure?"
                            );

                            if (isConfirm) {
                              editStatus(status.id);
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
export default HusbandStatuses;
