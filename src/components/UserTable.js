import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <Table bordered hover>
      <thead className="text-center">
        <tr>
          <th>ID</th>
          <th>Nome e cognome</th>
          <th>Email</th>
          <th>Opzioni</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="text-center">{user.id}</td>
            <td className="text-center">{user.name}</td>
            <td className="text-center">{user.email}</td>
            <td className="text-center">
              <Button
                variant="warning"
                onClick={() => onEdit(user)}
                className="me-2"
              >
                <FontAwesomeIcon icon={faPencil} />
              </Button>
              <Button variant="danger" onClick={() => onDelete(user.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
