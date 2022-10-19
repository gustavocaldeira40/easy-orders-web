import BGContainer from 'components/BGContainer'
import ButtonComponent from 'components/Button'
import Header from 'components/Header'
import InputComponent from 'components/Input'
import TitleDefault from 'components/TitleDefault'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import {
  Container,
  ContainerButton,
  ContainerInput,
  ContainerTop,
} from './style'

const RecoveryPassword: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const emailRef = useRef(null)

  /*
   *   STATES
   */

  const [loading, setLoading] = useState(false)
  /*
   *   HOOKS
   */
  const navigateTo = useNavigate()

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */
  const { errors, handleSubmit, isValid, values, handleChange } = useFormik({
    initialValues: {
      email: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required('Inform the email')
        .email('Please provide a valid email'),
    }),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
      navigateTo('/recovery-password-code-confirmation')
    },
  })

  /*
   *   FUNCTIONS
   */

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }
  /*
   *   EFFECTS
   */

  return (
    <Container>
      <Header withoutMenu />
      <BGContainer between>
        <ContainerTop>
          <TitleDefault
            title="Recovery Password"
            description="Enter your email and for us to recover your account"
          />
          <ContainerInput>
            <InputComponent
              passRef={emailRef}
              defaultValue={values.email}
              onChange={handleChange('email')}
              placeholder="Email"
              errorMessage={errors.email}
              onKeyDown={keyPress}
              width="100%"
            />
          </ContainerInput>
        </ContainerTop>

        <ContainerButton>
          <ButtonComponent
            disabled={!isValid}
            onClick={handleSubmit}
            styles={{
              opacity: !isValid || loading ? 0.5 : 1,
              transition: '1s all',
            }}
          >
            Send
          </ButtonComponent>
        </ContainerButton>
      </BGContainer>
    </Container>
  )
}

export default RecoveryPassword
