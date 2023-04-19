import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import * as S from './styles'

const Header = () => (
  <S.ContainerMenu>
    <Logo />
    <Menu />
  </S.ContainerMenu>
)

export default Header
