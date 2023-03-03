import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundaria'
}

//const Paragrafo = (props: Props) => <P>{props.children}</P>
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
