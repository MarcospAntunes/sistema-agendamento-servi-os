import styled from "styled-components";

const ContactSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;

  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 21px;

    & > div:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 21px;
      padding: 21px;
      border-radius: 8px;
      border: 1px solid var(--bg-gray-darker);
    }

    & > div:last-of-type {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
  }
`;

export default ContactSectionStyled;
