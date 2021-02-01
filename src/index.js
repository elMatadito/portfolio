import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './styles/Global.styled'
import { Portfolio } from './Portfolio'

ReactDOM.render(
  <>
    <GlobalStyles />
    <Portfolio />
  </>, document.getElementById('my-portfolio'))
