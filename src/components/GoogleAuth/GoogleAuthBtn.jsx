import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const GoogleAuthButton = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/users/google");

      history.push(`/your-route?token=${token}`);
    } catch (error) {
      console.error("Неможливо авторизуватись через Google", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleAuth} disabled={loading}>
        {loading ? "Триває авторизація..." : "Увійти через Google"}
      </button>
    </div>
  );
};

export default GoogleAuthButton;
