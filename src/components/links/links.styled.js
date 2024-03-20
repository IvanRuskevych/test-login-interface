import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 48px;
  border: 1.2px solid var(--color-border-prime);
  border-radius: 6px;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: var(--color-text-prime);

  &.link-cancel {
    width: 400px;
  }
`;
export const Icon = styled.img`
  margin-right: 10px;
  width: 18px;
  height: 18px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
