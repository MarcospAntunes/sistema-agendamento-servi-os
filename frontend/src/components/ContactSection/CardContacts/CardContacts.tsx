import { Fragment } from "react/jsx-runtime";
import CardContactsStyled from "./CardContacts.style";
import CardContactsTypes from "./CardContacts.type";

export default function CardContacts({ Icon, text, title }: CardContactsTypes) {
  return (
    <CardContactsStyled>
      <div>{Icon}</div>
      <div>
        <h4>{title}</h4>
        <p>
          {text.map((item, index) => (
            <Fragment key={index}>
              {item}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    </CardContactsStyled>
  );
}
