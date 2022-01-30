import React, { useState } from 'react'
import { Button, Form, Header, Message, Icon, Grid } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [displayMessage, setMessage] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
  })

  const [errors, setErrors] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log('Form Data ->', formData)
    try {
      await axios.post('/api/auth/register/', formData)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
      setMessage(true)
      console.log('Success')
    } catch (err) {
      console.log(err)
      setErrors(true)
      setMessage(false)
    }
  }

  return (

    <Grid each style={{ height: '90vh', paddinBottom: '10px' }} verticalAlign='middle'>
      <Grid.Row centered style={{ marginBottom: '70px', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid.Column width={10} textAlign='center' style={{ maxWidth: 800, height: '40vh' }}>
          <Header 
            className='animate__animated animate__fadeInTopLeft animate__slow'
            as='h1'
            content='Register to TKG Fashion'
            size='huge'
          />
          <br />

          <Form onSubmit={handleSubmit} size='big' success error>
            <Form.Group unstackable widths={2}>
              <Form.Input 
                label='Username' 
                iconPosition='right' 
                className='animate__animated animate__fadeInTopLeft animate__slow'
              >  
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder='Enter a username'
                  required
                />
                <Icon name='user' />
              </Form.Input>

              <Form.Input 
                label='Email' 
                iconPosition='right' 
                className='animate__animated animate__fadeInTopLeft animate__slow'
              >
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                />
                <Icon name='mail' />
              </Form.Input>
            </Form.Group>

            <Form.Group widths={2}>
              <Form.Input 
                label='Password' 
                iconPosition='right' 
                className='animate__animated animate__fadeInBottomRight animate__slow'
              >
                <input
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password'
                  type='password'
                  required
                />
                <Icon name='lock' />
              </Form.Input>

              <Form.Input
                label='Re-Enter Password' 
                iconPosition='right' 
                className='animate__animated animate__fadeInBottomRight animate__slow'
              >
                <input
                  name='password_confirmation'
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder='Enter password again'
                  type='password'
                  required
                />
                <Icon name='lock' />
              </Form.Input>
            </Form.Group>

            <Form.Group widths={2}>
              <Form.Input 
                label='First Name' 
                iconPosition='right' 
                className='animate__animated animate__fadeInBottomRight animate__slow'
              >
                <input
                  name='first_name'
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder='e.g. Jane'
                />
              </Form.Input>

              <Form.Input
                label='Last Name' 
                iconPosition='right' 
                className='animate__animated animate__fadeInBottomRight animate__slow'
              >
                <input
                  name='last_name'
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder='e.g. Smith'
                />
              </Form.Input>
            </Form.Group>

            <br/>
            <Button
              className='animate__animated animate__fadeInBottomRight animate__slow' 
              size='big' 
              color='teal' 
              type='submit'
            >
              Click to Register!
            </Button>
            {displayMessage ? (
              <Message 
                success
                header='Registration successful!'
                content='You will now be directed to the login page.'
              />
            ) : (errors && <Message 
              error
              header='Action Forbidden'
              content='Please check all fields have been entered correctly.'
            />)}
            
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Register