// Styled-components vs CSS/SASS: be able to apply styling to props.
// + do not use CSS class ❗❗

// 1. Tagged template literals
// merit: object and function can be extracted from their template ❗

// 2. Styling elements
// ex. 'MyComponent', 'MyBtn' => style components

/*
const MyComponent = styled.div`
  color: ${(props) => props.color || "blue"};
`;

function StyledComponent() {
  return (
    <div>
      <MyComponent color="red">Hello</MyComponent>
      <MyBtn inverted={true}>Btn 1</MyBtn>
      <MyBtn>Btn 2</MyBtn>
      <button>Btn 3</button>
    </div>
  );
}

// 3. Conditional Styling with props
// prerequisite: import CSS from styled-components
// Bonus: Reactive Design

const MyBtn = styled("button")`
  background: red;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: blue;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
*/