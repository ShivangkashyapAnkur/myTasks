import {Component} from 'react'
import {v4} from 'uuid'
import TagFilterContext from '../../context/TagFilterContext'
import Tag from '../Tag'
import TaskItem from '../TaskItem'
import {
  MainContainer,
  TaskInputsForm,
  Heading,
  InputContainer,
  InputLabel,
  Input,
  Select,
  Option,
  AddButton,
  TaskListContainer,
  HeadingTags,
  TagFiltersList,
  TasksContainer,
  NoTasksView,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {taskNameInput: '', taskTagId: tagsList[0].optionId, tasksList: []}

  AddTask = event => {
    event.preventDefault()
    const {taskNameInput, taskTagId} = this.state

    const taskTag =
      tagsList[tagsList.findIndex(eachTag => eachTag.optionId === taskTagId)]
        .displayText

    const newTask = {
      taskName: taskNameInput,
      taskTag,
      id: v4(),
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskNameInput: '',
      taskTagId: tagsList[0].optionId,
    }))
  }

  onChangeTaskName = event => {
    this.setState({taskNameInput: event.target.value})
  }

  onChangeTaskTag = event => {
    this.setState({taskTagId: event.target.value})
  }

  appendTasksList = () => {
    const {tasksList} = this.state

    return (
      <TagFilterContext.Consumer>
        {value => {
          const {activeTag} = value
          let newTaskList
          if (activeTag === '') {
            newTaskList = tasksList
          } else {
            newTaskList = tasksList.filter(
              eachTask => eachTask.taskTag === activeTag,
            )
          }

          const isNewTaskListEmpty = newTaskList.length === 0

          return (
            <>
              {isNewTaskListEmpty ? (
                <NoTasksView>No Tasks Added Yet</NoTasksView>
              ) : (
                <TasksContainer>
                  {newTaskList.map(eachTask => (
                    <TaskItem taskDetails={eachTask} key={eachTask.id} />
                  ))}
                </TasksContainer>
              )}
            </>
          )
        }}
      </TagFilterContext.Consumer>
    )
  }

  render() {
    const {taskNameInput, taskTagId} = this.state

    return (
      <MainContainer>
        <TaskInputsForm onSubmit={this.AddTask}>
          <Heading>Create a task!</Heading>
          <InputContainer>
            <InputLabel htmlFor="taskName">Task</InputLabel>
            <Input
              type="text"
              placeholder="Enter the task here"
              id="taskName"
              onChange={this.onChangeTaskName}
              value={taskNameInput}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="dropdown">Tags</InputLabel>
            <Select
              id="dropdown"
              onChange={this.onChangeTaskTag}
              value={taskTagId}
            >
              {tagsList.map(eachTag => (
                <Option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="submit">Add Task</AddButton>
        </TaskInputsForm>
        <TaskListContainer>
          <TagFilterContext.Consumer>
            {value => {
              const {activeTag} = value

              return (
                <>
                  <HeadingTags>Tags</HeadingTags>
                  <TagFiltersList>
                    {tagsList.map(eachTag => (
                      <Tag
                        tagDetails={eachTag}
                        key={eachTag.optionId}
                        isActive={activeTag === eachTag.displayText}
                      />
                    ))}
                  </TagFiltersList>
                  <HeadingTags>Tasks</HeadingTags>
                  {this.appendTasksList()}
                  {/* <TasksContainer>
                    {tasksList.map(eachTask => (
                      <TaskItem taskDetails={eachTask} key={eachTask.id} />
                    ))}
                  </TasksContainer> */}
                </>
              )
            }}
          </TagFilterContext.Consumer>
        </TaskListContainer>
      </MainContainer>
    )
  }
}

export default MyTasks
