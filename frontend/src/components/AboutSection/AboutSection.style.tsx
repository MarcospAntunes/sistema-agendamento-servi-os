import styled from "styled-components";

const AboutSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  & h1 {
    margin-bottom: 14px;
  }

  & h2 {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 21px;
  }

  & ul {
    list-style: disc;
  }

  & li::marker {
    color: var(--blue-600);
  }

  & p, li {
    color: var(--text-secondary-color);
    max-width: 470px;
    margin-bottom: 21px;
  }

  & img {
    width: 470px;
    height: 400px;
    border-radius: 8px;
    object-fit: cover;
  }
`

export default AboutSectionStyled;