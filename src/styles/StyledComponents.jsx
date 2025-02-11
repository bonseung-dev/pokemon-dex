import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const HomeImg = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

export const HomeBtn = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;
export const ListContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 30px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
export const CardContainer = styled.div`
  height: auto;
  width: 150px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
`;
export const CardBtn = styled.button`
  border-color: red;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
export const CardLi = styled.li`
  list-style: none;
`;
export const DetailContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 700px;
  width: 600px;
  margin: 0 auto;
`;

export const DetailImg = styled.img`
  width: 300px;
  height: auto;
`;
