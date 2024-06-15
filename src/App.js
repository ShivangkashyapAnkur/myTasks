import {Component} from 'react'

import MyTasks from './components/MyTasks'
import TagFilterContext from './context/TagFilterContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

class App extends Component {
  state = {activeTag: ''}

  changeTag = tagName => {
    this.setState({activeTag: tagName})
  }

  render() {
    const {activeTag} = this.state

    return (
      <TagFilterContext.Provider value={{activeTag, changeTag: this.changeTag}}>
        <MyTasks />
      </TagFilterContext.Provider>
    )
  }
}

export default App
