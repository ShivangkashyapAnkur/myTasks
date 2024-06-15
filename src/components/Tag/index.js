import TagFilterContext from '../../context/TagFilterContext'
import {TagButton, TagItem} from './styledComponents'

const Tag = props => {
  const {tagDetails, isActive} = props
  const {displayText} = tagDetails
  return (
    <TagFilterContext.Consumer>
      {value => {
        const {changeTag} = value

        const onClickChangeTag = () => {
          changeTag(displayText)
        }

        return (
          <TagItem>
            <TagButton
              type="button"
              onClick={onClickChangeTag}
              isActive={isActive}
            >
              {displayText}
            </TagButton>
          </TagItem>
        )
      }}
    </TagFilterContext.Consumer>
  )
}

export default Tag
