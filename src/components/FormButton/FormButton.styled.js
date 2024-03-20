import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: var(--color-bg-btn);
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0;
    text-align: center;
    color: var(--color-text-secondary);

    &.btn-login {
        margin-top: 30px;
    }
`;
