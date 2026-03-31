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
            <>
              {item}
              <br key={index} />
            </>
          ))}
        </p>
      </div>
    </CardContactsStyled>
  );
}
