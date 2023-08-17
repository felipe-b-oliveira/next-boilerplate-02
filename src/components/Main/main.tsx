import * as Styles from './main.styles'

const Main = ({ title = 'React Avançado', description = 'TypeScript, ReactJS, NextJS e Styled Components' }) => (
  <Styles.Wrapper>
    <Styles.Logo src='/img/logo.svg' alt='Imagem de um átomo e React Avançado escrito ao lado.' />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Illustration src='/img/hero-illustration.svg' alt='Um desenvolvedor de frente para uma tela com código.' />
  </Styles.Wrapper>
)

export default Main
