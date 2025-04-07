import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="floating-text">
        Work is in progress. You can contact my boss –{' '}
        <a href="https://www.instagram.com/unknowngmr02/">Contact Us</a>
      </div>

      <div className="character-cube-wrapper">
        <div className="anime-character" />

        <div className="cube-loader">
          <div className="cube-top" />
          <div className="cube-wrapper">
            <span style={{ '--i': 0 }} className="cube-span" />
            <span style={{ '--i': 1 }} className="cube-span" />
            <span style={{ '--i': 2 }} className="cube-span" />
            <span style={{ '--i': 3 }} className="cube-span" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const float = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(-10px); opacity: 1; }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #111;

  .floating-text {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 30px;
    color: white;
    text-align: center;
    animation: ${float} 3s ease-in-out infinite;

    a {
      color: #00d1ff;
      text-decoration: underline;
    }
  }

  .character-cube-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 40px;
  }

  .anime-character {
    width: 60px;
    height: 60px;
    background: #f9c1d9;
    border-radius: 50% 50% 40% 40% / 55% 55% 40% 40%;
    position: relative;
    animation: float 2s ease-in-out infinite;
    box-shadow: inset 0 0 0 2px #fff;
  }

  .anime-character::before,
  .anime-character::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: black;
    border-radius: 50%;
    top: 22px;
  }

  .anime-character::before {
    left: 16px;
  }

  .anime-character::after {
    right: 16px;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .cube-loader {
    position: relative;
    width: 75px;
    height: 75px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotateX(-30deg) rotateY(0);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  .cube-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cube-span {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
    background: linear-gradient(
      to bottom,
      #1f1f1f,
      #2a2a2a,
      #444,
      #5ffbf1
    );
  }

  .cube-top {
    position: absolute;
    width: 75px;
    height: 75px;
    background: #1f1f1f;
    transform: rotateX(90deg) translateZ(37.5px);
    transform-style: preserve-3d;
  }

  .cube-top::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 75px;
    background: #5ffbf1;
    transform: translateZ(-90px);
    filter: blur(10px);
    box-shadow: 0 0 10px #323232,
                0 0 20px #5ffbf1,
                0 0 30px #323232,
                0 0 40px #5ffbf1;
  }
`;

export default Loader;
