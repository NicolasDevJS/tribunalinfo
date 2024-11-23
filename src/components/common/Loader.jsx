import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9; 
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); 
  border-top: 8px solid #191970; 
  border-radius: 50%;
  width: 80px; 
  height: 80px; 
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);

export default Loader;
