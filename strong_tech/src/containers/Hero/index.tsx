import * as S from './styles'
import Tipografia from '../../components/Tipografia'
import { Botao } from '../../components/Botao'

const Hero = () => (
  <S.ContainerHero>
    <div>
      <S.TituloSecundario>DOMINANDO O MUNDO DA TECNOLOGIA</S.TituloSecundario>
      <S.TituloPrimario>Design e Desempenho Superiores.</S.TituloPrimario>
      <Tipografia fontColor={false}>
        Os produtos Strong Tech foram desenvolvidos com um design inovador e
        pensados para oferecer o máximo desempenho em todas as suas atividades.
        Com tecnologia de ponta e alta qualidade, nossos computadores e produtos
        são ideais para quem busca a excelência em performance. Descubra agora
        mesmo a experiência Strong Tech.
      </Tipografia>
      <Botao>Saiba Mais</Botao>
    </div>
    <img
      src="https://github.com/ElsonMateusFE/teste/blob/main/src/components/images/teste-topo-2%201.png?raw=true"
      alt=""
    />
  </S.ContainerHero>
)

export default Hero
