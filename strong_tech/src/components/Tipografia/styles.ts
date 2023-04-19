import styled from 'styled-components'

import { Props } from '.'

export const Paragrafos = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '20px')};
  color: ${(props) => (props.fontColor ? '#303030' : '#181818')};
`
