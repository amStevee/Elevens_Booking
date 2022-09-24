import StyledButton from "../../styles/Button.styled";
//SHOULD HAVE USED PROPS INSTED OF THE UNNERSSARRY DISSTRUCTURING
// {
//   text,
//   margin,
//   marginleft,
//   marginright,
//   margintop,
//   marginbottom,
//   padding,
//   background,
//   color,
//   width,
//   height,
//   border,
//   handleOption,
//   disabled,
//   borderR,
//   position,
//   top,
//   right,
//   bottom,
//   left,
// }
export default function Button(props) {
  return (
    <StyledButton
      disabled={props.disabled}
      margin={props.margin}
      marginleft={props.marginleft}
      marginright={props.marginright}
      margintop={props.margintop}
      marginbottom={props.marginbottom}
      padding={props.padding}
      background={props.background}
      color={props.color}
      width={props.width}
      height={props.height}
      border={props.border}
      borderR={props.borderR}
      onClick={props.handleOption}
      position={props.position}
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
    ></StyledButton>
  );
}
