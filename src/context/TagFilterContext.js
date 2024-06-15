import React from 'react'

const TagFilterContext = React.createContext({
  activeTag: '',
  changeTag: () => {},
})

export default TagFilterContext
