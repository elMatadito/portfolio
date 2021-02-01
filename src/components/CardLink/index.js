import React from 'react'
import { CardLinkContainer } from './styled'

const DEFAULT_IMAGE = ''

export const CardLink = ({ title, subtitle, extra_info, image = DEFAULT_IMAGE }) => (
  <CardLinkContainer>
    <img src={image} />
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{extra_info}</p>
    </div>
  </CardLinkContainer>
)