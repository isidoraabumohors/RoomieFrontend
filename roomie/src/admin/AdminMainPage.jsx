import React from 'react';
import './AdminMainPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function AdminMainPage() {

    const navigate = useNavigate();

    const handleViewUsersClick = () => {
      navigate('/view-users');
    };
  
    const handleViewMatchesClick = () => {
      navigate('/view-matches');
    };

    const handleViewLocationsClick = () => {
      navigate('/view-locations');
    };


  return (
    <>
      <Navbar />

      <div className="admin-main-page">
        <h1> ¡Bienvenid@ Admin!</h1>
        <button className="admin-button-principal" onClick={handleViewUsersClick}>
          Ver usuarios y sus perfiles
        </button>
        <button className="admin-button-principal" onClick={handleViewMatchesClick}>
          Ver matches realizados
        </button>
        <button className="admin-button-principal" onClick={handleViewLocationsClick}>
          Ver ubicaciones
        </button>
        </div>
    </>
);
}

export default AdminMainPage;