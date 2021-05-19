import React from 'react'
import { IoAddCircleSharp } from 'react-icons/io5'
import { AiFillMinusCircle } from 'react-icons/ai'
import { Button, ButtonContainer } from './components/Button'
import { MainContainer, SecondContainer } from './components/Container'
import { CounterContainer } from './components/Counter'
import Fade from 'react-reveal/Fade'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, login, logout } from './actions/index'
import getRandomColor from './helpers/getRandomColor'
function App() {
  // getReducer from store
  const counter = useSelector(state => state.counter )
  const auth = useSelector(state => state.loggedInReducer)
  const dispatch = useDispatch()

  if (!auth.isLoggedIn) return <Fade> <h1>You are not login. <Button onClick={() => dispatch(login())}> Click here to login</Button></h1></Fade>

  return (<>
    <MainContainer bgColor={getRandomColor()}>
      <SecondContainer>
        <Fade cascade top>
          <CounterContainer bgColor={getRandomColor()}>
            {counter.value}
          </CounterContainer>
        </Fade>
        <ButtonContainer>
          <Fade cascade left>
            <Button onClick={() => dispatch(increment(5))} primary><IoAddCircleSharp style={{ fontSize: '3rem' }} /></Button>
          </Fade>
          <Fade cascade right>
            <Button onClick={() => dispatch(decrement())} ><AiFillMinusCircle style={{ fontSize: '3rem' }} /></Button>
          </Fade>

        </ButtonContainer>
        <Fade cascade bottom>
          <Button onClick={() => dispatch(logout())} >Logout</Button>
        </Fade>
      </SecondContainer>
    </MainContainer>
  </>);
}

export default App;
