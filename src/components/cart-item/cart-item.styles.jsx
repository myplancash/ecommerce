import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const RemoveButtonContainer = styled.div`
  width: 15%;
  padding-left: 12px;
  cursor: pointer;
  align-self: center;
`;