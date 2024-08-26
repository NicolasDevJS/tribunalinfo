import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  min-height: 100vh; /* Garantir que o container ocupe a altura mínima */
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
`;

export const Title = styled.h1`
  color: #130066;
  margin: 0;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  padding: 15px 35px;
  background: #ffffff;
  border: 1px solid #cccccc; 
  border-radius: 8px;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 2vw;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    background: #e2e2e2;
    color: #000000;
    border: 1px solid #bbbbbb;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-top: 5vw;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddPhotoButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  padding: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

export const UserDetail = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Estilos para os cards de serviços
export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const ServiceCard = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

export const ServicePrice = styled.p`
  font-size: 1.2rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ServiceItem = styled.li`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

export const ServiceItemDesc = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 5px;
  text-transform: none;
`;

export const SubscribeButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;
