import styled from 'styled-components';

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: rgba(227, 207, 235, 0.8);
  background-image: url('src/image/d901da3cf6c0870e70046e610a459f58.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: relative;
  /* height: 100%; */
  background-position: calc(50% + 154px) 108px, calc(50% + 168px) 54px;
`;

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;
