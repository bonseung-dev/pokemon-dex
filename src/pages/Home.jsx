import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>포켓몬 도감 시작하기</h1>
      <button onClick={() => navigate("/dex")}>도감 페이지로 이동</button>
    </div>
  );
};

export default Home;
