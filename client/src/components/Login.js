import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Grid, Button, Container, Form, Header, Icon, Message } from 'semantic-ui-react'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const [displayMessage, setMessage] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setformData(newFormData)
  }

  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setItemToLocalStorage(data.token)
      setTimeout(() => {
        navigate('/browse')
      }, 2000)
      setMessage(true)
    } catch (err) {
      setError(true)
      setMessage(false)
    }
  }

  return (

    <Grid style={{ height: '70vh', paddingBottom: '20px' }} verticalAlign='middle'>
      <Grid.Row centered style={{ margin: '0px 50px', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid.Column className='animate__animated animate__flipInX animate__slow' width={5} textAlign='center' style={{ marginBottom: '10px', maxWidth: 800, height: '40vh' }}>
          <Header
            as='h1'
            content='Sign in to TKG Fashion'
            textAlign='center'
          />
          <Form onSubmit={handleSubmit} size='big' success error>
            <Form.Field>
              <label> <Icon name='user' /> Email </label>
              <input
                name='email'
                value={formData.email}
                placeholder='e.g. user@email.com'
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label> <Icon name='lock' /> Password </label>
              <input
                name="password"
                value={formData.password}
                type='password'
                placeholder='Enter your password'
                onChange={handleChange}
              />
            </Form.Field>
            {displayMessage ? (
              <Message className='animate__animated animate__rollOut animate__slow animate__delay-2s'
                success
                header='Login Successful'
                content="You will now be redirected to the browse page."
              />
            ) : (error && <Message 
              error
              header='Login Unsuccessful'
              content='Your email or password is incorrect, please try again!'
            />) }
            <Button color='teal' type='submit' animated>
              <Button.Content visible>Log In!</Button.Content>
              <Button.Content hidden>
                <Icon name='sign in' />
              </Button.Content>
            </Button>
          </Form>
        </Grid.Column>

        <Grid.Column className='animate__animated animate__flipInX animate__slow' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }} width={6}>
          <Header
            as='h4'
            textAlign='center'
            content='Not registered yet? Click here to register!'
          />
          
          <Container textAlign='center'>
            <Button style={{ marginBottom: '20px' }} color='teal' as='a' href='/register' animated>
              <Button.Content visible>Register</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Login