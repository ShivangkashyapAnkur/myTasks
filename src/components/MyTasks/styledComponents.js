import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const TaskInputsForm = styled.form`
  background-color: #131213;
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-size: 30px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const InputLabel = styled.label`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Consolas';
  font-weight: 600;
`

export const Input = styled.input`
  height: 35px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Consolas';
  color: #323f4b;
`

export const Option = styled.option`
  font-family: 'Consolas';
`

export const Select = styled.select`
  height: 35px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  font-family: 'Consolas';
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  font-family: 'Consolas';
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  width: 120px;
  border-radius: 10px;
  border-style: none;
  margin: 10px;
`

export const TaskListContainer = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 65vw;
  padding: 20px;
`

export const HeadingTags = styled.h1`
  color: #ffffff;
  font-family: 'Consolas';
  font-size: 25px;
`

export const TagFiltersList = styled.ul`
  list-style-type: none;
  color: #ffffff;
  padding-left: 0;
  display: flex;
  flex-direction: row;
`
export const TasksContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 60vh;
`
export const NoTasksView = styled.p`
  color: #ffffff;
  font-family: 'Consolas';
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
