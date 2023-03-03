import React from "react"

import { Laser } from "../helpers/types"
import { useSetState } from "../helpers/hooks"

import { Layout } from "../layouts/"

import Header from "../containers/Header"
import Footer from "../containers/Footer"
import Playground from "../containers/Playground"
import Main from "../components/Main"

/**
 * Types
 */
interface State {
  laser?: Laser
  portrait?: string
}

const App: React.FC = () => {
  const [state, setState] = useSetState<State>({
    laser: Laser.OrdinalsCircle,
    portrait: undefined,
  })

  const onDrop = ([file]: File[]): void => {
    setState({
      portrait: URL.createObjectURL(file),
    })
  }

  return (
    <Layout>
      <Main>
        <Header />
        <Playground laser={state.laser} portrait={state.portrait} onDrop={onDrop} />
        <Footer />
      </Main>
    </Layout>
  )
}

export default App
