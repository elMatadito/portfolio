import React from 'react'
import { TagContainer } from './styled'

export const Tag = ({ name }) => {
  return (
    <TagContainer>
      {name}
    </TagContainer>
  )
}