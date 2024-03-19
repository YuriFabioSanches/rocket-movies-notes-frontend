import styled from "styled-components";

export const Container =styled.div`
  height: 22.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 1.6rem;

  > h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: .8rem;
  }

  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Stars =styled.div`
  display: flex;
  gap: .6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.2rem;
  margin-bottom: 1.6rem;

  .fill {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Tags =styled.div`
  display: flex;
  gap: .8rem;
  margin-top: 1.6rem;
`;