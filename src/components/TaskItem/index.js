import {TaskItemContainer, TaskName, TaskTag} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props

  const {taskName, taskTag} = taskDetails
  return (
    <TaskItemContainer>
      <TaskName>{taskName}</TaskName>
      <TaskTag>{taskTag}</TaskTag>
    </TaskItemContainer>
  )
}

export default TaskItem
