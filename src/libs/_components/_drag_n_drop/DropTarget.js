import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import { AddIcon } from "../../../assets/icons";

const StyledDropTarget = styled.div`
  background: #343540 0% 0% no-repeat padding-box;
  border: 1px dashed #cbcbcb;
  margin-bottom: 14px;
  margin: 12px 0;
  text-align: center;
  vertical-align: middle;
  padding: ${(props) => (props.hasChildren ? `0` : `15px 0`)};
  border: ${(props) =>
    props.hasChildren ? `3px solid #343540` : `1px dashed #CBCBCB`};
  border-radius: ${(props) => (props.hasChildren ? `7px` : `10px`)};
  /* min-height: 71px; */
  width: 100%;

  .widget {
    width:100%;
    height: 100%;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
  }
`;

const DropTarget = ({ children, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // Override monitor.canDrop() function
    canDrop: (widget) => {
      return true;
    },
  });

  return (
    <StyledDropTarget ref={drop} hasChildren={children.length}>
      {!children.length > 0 && <AddIcon />}
      {children}
    </StyledDropTarget>
  );
};

export default DropTarget;