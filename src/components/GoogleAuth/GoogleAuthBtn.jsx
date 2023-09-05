import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export const GoogleAuthBtn = () => {
  
  const TokenHandler = () => {
    const location = useLocation();
    
  useEffect(() => {
       const params = new URLSearchParams(location.search);
    const token = params.get('token');
    
    if (token) {
            console.log(Received token: ${token});
    }
  }, [location]);

  return (
    <div>
      {/* В этом компоненте вы можете разместить содержимое, если это необходимо */}
      <h1>Обработка токена</h1>
    </div>
  );
};

export default TokenHandler;

  // const history = useHistory();
  // const [loading, setLoading] = useState(false);

  // const handleGoogleAuth = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get("/api/users/google");

  //     history.push(`/your-route?token=${token}`);
  //   } catch (error) {
  //     console.error("Неможливо авторизуватись через Google", error);
  //     setLoading(false);
  //   }
  // };

  // return (
  //   <div>
  //     <button onClick={handsleGoogleAuth} disabled={loading}>
  //       {loading ? "Триває авторизація..." : "Увійти через Google"}
  //     </button>
  //   </div>
  // );
};


export default GoogleAuthButton;
