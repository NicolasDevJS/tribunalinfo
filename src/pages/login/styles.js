import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ddd; 
`;

export const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 40vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #0070f3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export const SwitchText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #0070f3;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  padding: 15px 35px;
  background: #ffffff;
  border: 1px solid #cccccc; 
  border-radius: 8px;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem; 
  font-weight: 500;
  font-size: 12px;

  &:hover {
    background: #e2e2e2;
    color: #000000;
    border: 1px solid #bbbbbb;
  }
`;
