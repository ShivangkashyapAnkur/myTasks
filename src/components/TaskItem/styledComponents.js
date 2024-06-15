import styled from 'styled-components'

export const TaskItemContainer = styled.li`
  background-color: #131213;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
export const TaskName = styled.p`
  color: #ffffff;
  font-family: 'Consolas';
  font-size: 15px;
  margin: 5px;
`
export const TaskTag = styled.p`
  color: #323f4b;
  background-color: #f3aa4e;
  padding: 5px;
  width: 120px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  border-radius: 20px;
`
