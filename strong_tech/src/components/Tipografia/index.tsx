import { Paragrafos } from './styles'

export type Props = {
  fontSize?: number
  children: string
  fontColor: boolean
}

const Tipografia = ({ fontSize, children, fontColor }: Props) => (
  <Paragrafos fontSize={fontSize} fontColor={fontColor}>
    {children}
  </Paragrafos>
)

export default Tipografia
