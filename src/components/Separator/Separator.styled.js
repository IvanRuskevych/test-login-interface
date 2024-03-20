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
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: var(--color-separator);
`;
