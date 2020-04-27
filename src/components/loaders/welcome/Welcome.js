import React from 'react';
import styled from 'styled-components';
import welcomeImg from '../../../images/welcome.svg';
import { Link } from 'react-router-dom';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;

  div {
    width: 100%;
    max-width: 500px;
    text-align: center;
    padding: 2rem;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
        display: block;
        margin: 2rem auto;
      }
    }
  }
`;
function Welcome() {
  return (
    <Loader>
      <div>
        <Link to="/create">
          <img src={welcomeImg} alt="Welcome to Billy" />
        </Link>
      </div>
    </Loader>
  );
}

export default Welcome;
