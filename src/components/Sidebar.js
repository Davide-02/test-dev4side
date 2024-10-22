import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPencil, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
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
