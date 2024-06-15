import styled from 'styled-components'

export const TagItem = styled.li``

export const TagButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  color: #ffffff;
  border: solid 1px #f3aa4e;
  border-radius: 20px;
  height: 30px;
  width: 120px;
  padding: 2px;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`
