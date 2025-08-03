import BaseButton from './componets/StyledComponents/BaseButton';
import Card from './componets/StyledComponents/Card';
import styled from 'styled-components';
import StyledButton from './componets/StyledComponents/styledButton';

export default function AppStyled() {
  return (
    <>
      <Card />
      <hr />
      <BaseButton onClick={() => alert('Base Button clicked!')}>
        Base Button
      </BaseButton>
      <StyledButton onClick={() => alert('Button clicked!')}>
        Click Me
      </StyledButton>
    </>
  );
}
