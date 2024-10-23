import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPencil, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, onClose }) => {
  console.debug(isOpen)
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon 
            icon={faTimes} 
            className="close-icon" 
            onClick={onClose} 
            style={{ cursor: 'pointer', margin: '10px' }} 
          />
        </div>
      )}
      <ul className="list-unstyled">
        <li>
          <Link className='text-decoration-none' to="/">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Utenti
          </Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/immagini">
            <FontAwesomeIcon icon={faImages} className="me-2" />
            Immagini
          </Link>
        </li>
        <li>
          <Link className='text-decoration-none' to="/post">
            <FontAwesomeIcon icon={faPencil} className="me-2" />
            Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
