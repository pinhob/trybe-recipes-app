import styled from 'styled-components';
import backgroundLogin from '../images/backGroundLogin.jpg';
// Agradecimentos ao nosso amigo Matheus Duarte, administrador
// do Notion da Turma, por nos elucidar quanto ao uso da styled-components.

export const LoginStyle = styled.div`
  .DivBackgroundLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundLogin});
  };
  .DivLogoForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    background-color: #f35009a4;
    border-radius: 7px;
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.500);
    img {
      margin-top: 50px;
      width: 250px;
    }
  };
  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
  };
  input {
    width: 240px;
    height: 40px;
    margin-top: 5px;
    padding-left: 10px;
    border-radius: 12px;
    outline: none;
  };
  .ButtonLogin {
    width: 120px;
    height: 40px;
    margin-left: 115px;
    margin-top: 15px;
    border-radius: 12px;
  };
`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title-buttons {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    & button {
      outline: none;
      border: 0;
    }
  }
  .search-bar {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #f35009a4;
  .divLabel {
    display: flex;
    flex-direction: column;
    width: 160px;
    label {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }
  .buscar-e-input {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    input {
      display: flex;
      width: 100%;
      border-radius: 7px;
    }
    button {
      width: 100%;
      border-radius: 12px;
    }
  }
`;
