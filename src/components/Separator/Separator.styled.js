import styled from 'styled-components';

export const StyledSeparator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-separator);
  }
`;

export const StyledText = styled.span`
  padding: 0 5px;
  //styleName: B4/Medium;
  //font-family: Basis Grotesque Pro;
  font-size: 12px;
  //font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  color: var(--color-separator);
`;
