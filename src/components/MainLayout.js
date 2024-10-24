import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainLayout = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalEditUser(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSaveUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setModalEditUser(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="header2">
        <FontAwesomeIcon 
          icon={faBars} 
          className="menu-icon" 
          onClick={toggleSidebar} 
        />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className={`content ${sidebarOpen ? "open" : ""}`}>
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
        {modalEditUser && selectedUser && (
          <EditUserModal
            show={modalEditUser}
            handleClose={() => setModalEditUser(false)}
            handleSave={handleEditUser}
            user={selectedUser}
          />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
