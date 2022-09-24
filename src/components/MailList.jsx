import StyledMailList from "../styles/MailList.styled";
import Button from "./reuseables/Button";

export default function MailList() {
  return (
    <StyledMailList>
      <h1 className="mailTitle">Save time, Save money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="email" placeholder="your Email" />
        <Button
          text={"Subscribe"}
          border={"none"}
          borderR={"5px"}
          padding={"4px"}
          color={"#fff"}
          height={"35px"}
          background={"#ff6854"}
        />
      </div>
    </StyledMailList>
  );
}
