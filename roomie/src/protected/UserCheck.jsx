import {useCallback, useEffect, useContext, useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../auth/AuthContext';
import API_URL from "../config"

function UserCheck() {
    const { token } = useContext(AuthContext);
    const [msg, SetMsg] = useState('');
  
    // Use useCallback to memoize the config function
    const getConfig = useCallback(() => {
      return {
        method: 'get',
        url: `${API_URL}/scope-example/protecteduser`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }, [token]);
  
    useEffect(() => {
      const config = getConfig();
  
      axios(config)
        .then((response) => {
          console.log('Enviaste un token bueno y estás loggeado');
          console.log(response);
          SetMsg(response.data.message);
        })
        .catch((error) => {
          console.log('Hubo un error: no estás loggeado / token expiró');
          console.log(error);
          SetMsg(error.message)
        });
    }, [getConfig]); // Include getConfig in the dependency array
  
    return <h1>{msg}</h1>;
  }
  
  export default UserCheck;