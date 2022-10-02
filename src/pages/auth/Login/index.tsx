import React, { useState, useContext, useRef } from 'react'
import BGContainer from 'components/BGContainer'
import Header from 'components/Header'
import InputComponent from 'components/Input'
import TitleDefault from 'components/TitleDefault'
import { DataContext } from 'context/app'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { EndPoints } from 'services/endpoints'
import { toast } from 'react-toastify'
import validator from 'validator'

import MailIcon from 'assets/icons/mail.png'
import NicknameIcon from 'assets/icons/nickname.png'
import LinkComponent from 'components/Link'
import ButtonComponent from 'components/Button'
import Loading from 'components/Loading'
import {
  Container,
  ContainerButton,
  ContainerFooter,
  ContainerIconChange,
  ContainerInputs,
  ContainerLinks,
  ContainerRegister,
  IconChange,
  TextDontHaveAccount,
  TextIcon,
  TextRegister,
  TextScreen,
} from './style'

const Login: React.FC = () => {
  /*
   *   CONTEXT
   */
  const { setUser, setIsAuthenticate, setToken, logOut } =
    useContext(DataContext)
  /*
   *   REFS
   */
  const emailRef = useRef(null)
  const nicknameRef = useRef(null)
  const passwordRef = useRef(null)

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)
  const [emailOrNickname, setEmailOrNickname] = useState(false)

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
      nickname: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required('Enter the password')
        .min(6, 'Password must contain at least 6 characters'),
    }),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
      setLoading(true)
      try {
        // Verify if email isValid
        if (values?.email?.length > 0 && !validator.isEmail(values?.email)) {
          errors.email = 'Please enter a valid email'
          return
        }

        // Verify if nickname isValid
        if (values?.nickname?.length < 4) {
          errors.nickname = 'The field must have at least 4 characters'
          return
        }

        const formDataEmail = {
          email: values?.email,
          password: values?.password,
        }

        const formDataNickname = {
          nickname: values?.nickname,
          password: values?.password,
        }

        // const data = await EndPoints.login(
        //   emailOrNickname ? formDataEmail : formDataNickname,
        // )
        // if (data) {
        //   const user = await EndPoints.getUser(data?.user?.id)
        //   setUser(user)
        //   setToken(data?.access_token)
        //   setIsAuthenticate(true)
        navigateTo('/dashboard')
        // }
      } catch (error) {
        console.log('error', error)

        toast.error('Check email and password and try again')
      } finally {
        setLoading(false)
      }
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

  const logout = async () => {
    const data = await logOut()
    if (data) {
      navigateTo('/')
    }
  }

  /*
   *   EFFECTS
   */
  return (
    <>
      <Loading show={loading} />
      <Container>
        <Header />
        <BGContainer between>
          <TitleDefault
            title="Welcome to"
            description="Easy order, to place your order I need to register"
            withML
          />
          <ContainerInputs>
            {emailOrNickname ? (
              <InputComponent
                passRef={emailRef}
                defaultValue={values.email}
                onChange={handleChange('email')}
                placeholder="Email"
                errorMessage={errors.email}
                onKeyDown={keyPress}
              />
            ) : (
              <InputComponent
                passRef={nicknameRef}
                defaultValue={values.nickname}
                onChange={handleChange('nickname')}
                placeholder="Nickname"
                errorMessage={errors.nickname}
                onKeyDown={keyPress}
              />
            )}
            <InputComponent
              passRef={passwordRef}
              isPassword
              defaultValue={values.password}
              value={values.password}
              onChange={handleChange('password')}
              errorMessage={errors.password}
              placeholder="Password"
            />
            <ContainerLinks>
              {emailOrNickname ? (
                <ContainerIconChange
                  onClick={() => setEmailOrNickname(!emailOrNickname)}
                >
                  <IconChange src={NicknameIcon} alt="Nickname Icon" />
                  <TextIcon>Login With Nickname</TextIcon>
                </ContainerIconChange>
              ) : (
                <ContainerIconChange
                  onClick={() => setEmailOrNickname(!emailOrNickname)}
                >
                  <IconChange src={MailIcon} alt="Email Icon" />
                  <TextIcon>Login With Email</TextIcon>
                </ContainerIconChange>
              )}

              <LinkComponent path="/recovery-password">
                <TextScreen>Recovery Password</TextScreen>
              </LinkComponent>
            </ContainerLinks>
          </ContainerInputs>
          <ContainerFooter>
            <ContainerRegister>
              <TextDontHaveAccount>Don’t have a account ?</TextDontHaveAccount>
              <LinkComponent path="/register">
                <TextRegister>Register now</TextRegister>
              </LinkComponent>
            </ContainerRegister>
            <ContainerButton>
              <ButtonComponent
                disabled={!isValid}
                onClick={handleSubmit}
                styles={{
                  opacity: !isValid || loading ? 0.5 : 1,
                  transition: '1s all',
                }}
              >
                Login
              </ButtonComponent>
            </ContainerButton>
          </ContainerFooter>
        </BGContainer>
      </Container>
    </>
  )
}

export default Login
