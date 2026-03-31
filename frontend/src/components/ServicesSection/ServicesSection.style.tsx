import styled from "styled-components";

const ServicesSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-gray-lighter);

  & h1 {
    margin-bottom: 14px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 64px;
  }

  & > div:last-of-type {
    flex-direction: column;
    padding: 42px;
    border-radius: 8px;
    background-color: var(--blue-600);
    color: white;

    & > svg {
      width: 42px;
      height: 42px;
    }

    h3 {
      font-size: 26px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      text-align: center;
      max-width: 672px;
    }

    button {
      width: 180px;
      padding: 10px 21px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      color: var(--blue-600);
      background-color: white;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: var(--bg-gray);
      }
    }
  }
`;

export default ServicesSectionStyled;
