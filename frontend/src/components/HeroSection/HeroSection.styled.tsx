import styled from "styled-components";

const HeroSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100vw;
  padding: 70px 0;
  margin-top: 70px;
  background-image: var(--section-gradient);

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 20px;

    & img {
      width: 615px;
      height: 500px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: var(--box-shadow-3D-effect)
    }

    & > p:first-of-type {
      max-width: 470px;
      font-size: 16px;
      color: var(--text-secondary-color);
    }

    & h1 {
      font-weight: bold;
      font-size: 42px;

      & span {
        color: var(--blue-600)
      }
    }

    & div:nth-of-type(2) {
      border-top: 1px solid var(--border-color);
    }
  }

`

export default HeroSectionStyled;