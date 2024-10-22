import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";
import AddUserModal from "./AddUserModal";
import { Button } from "react-bootstrap";

const MainLayout = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAddUser, setModalAddUser] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (userId) => {
    console.log("Edit user", userId);
  };

  const handleDelete = (userId) => {
    console.log("Delete user", userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSaveUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Ricerca qui l'utente"
          value={searchQuery}
          className="form-control mb-3"
        />
        <UserTable
          users={filteredUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Button
          onClick={() => setModalAddUser(true)}
          className="btn btn-success mt-3"
        >
          Aggiungi Utente
        </Button>
        {modalAddUser && (
          <AddUserModal
            show={modalAddUser}
            handleClose={() => setModalAddUser(false)}
            handleSave={handleSaveUser}
          />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
