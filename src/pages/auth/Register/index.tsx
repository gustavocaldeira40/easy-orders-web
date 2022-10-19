import BGContainer from 'components/BGContainer'
import Header from 'components/Header'
import TitleDefault from 'components/TitleDefault'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { EndPoints } from 'services/endpoints'
import { useNavigate } from 'react-router-dom'
import InputComponent from 'components/Input'
import ButtonComponent from 'components/Button'
import {
  Container,
  ContainerButtons,
  ContainerInputs,
  Separator,
} from './style'

const Register: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(false)

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
  const {
    errors,
    handleSubmit,
    isValid,
    resetForm,
    values,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      nickname: '',
      password: '',
      password_confirmation: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      name: yup.string().required('Inform the your name'),
      email: yup
        .string()
        .required('Inform the email')
        .email('Please provide a valid email'),
      password: yup
        .string()
        .required('Enter the password')
        .min(6, 'Password must contain at least 6 characters'),
      password_confirmation: yup.string().when('password', {
        is: (val: string) => val?.length > 0,
        then: yup
          .string()
          .required('Provide password confirmation')
          .oneOf([yup.ref('password')], 'Passwords must be the same'),
      }),
    }),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
      setLoading(true)

      const formData = {
        name: values.name,
        nickname: values.nickname,
        email: values.email,
        password: values.password,
      }

      try {
        if (check) {
          const data = await EndPoints.register(formData)

          if (data) {
            toast.success(`Register Sucessfully !`, {
              position: toast.POSITION.TOP_CENTER,
            })
            navigateTo('/clients')
          }
        }
      } catch (error) {
        console.log('error', error)

        toast.error(`Error the Register, Try Again`, {
          position: toast.POSITION.TOP_CENTER,
        })
      } finally {
        setLoading(false)
      }
    },
  })

  /*
   *   REFS
   */
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const nicknameRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef((values as any)?.password_confirmation)

  /*
   *   FUNCTIONS
   */

  const verifyNickname = async (value: string) => {
    setFieldValue('nickname', value)

    try {
      const data = await EndPoints.verifyNickname(value)

      if (data) {
        setCheck(true)
      } else {
        setCheck(false)
      }
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  /*
   *   EFFECTS
   */

  return (
    <Container>
      <Header withoutMenu />

      <BGContainer between>
        <TitleDefault
          title="Register of User"
          description="Easy order, to place your order I need to register."
        />

        <ContainerInputs>
          <InputComponent
            passRef={nameRef}
            defaultValue={values.name}
            onChange={handleChange('name')}
            placeholder="Name"
            errorMessage={errors.name}
            width="50%"
          />
          <Separator />
          <InputComponent
            passRef={nicknameRef}
            defaultValue={values.nickname}
            onChange={handleChange('nickname')}
            placeholder="Nickname"
            errorMessage={errors.nickname}
            check={check}
            isCheck
            width="45%"
          />

          <InputComponent
            passRef={emailRef}
            defaultValue={values.email}
            onChange={handleChange('email')}
            placeholder="Email"
            errorMessage={errors.email}
            width="50%"
          />
          <Separator />
          <InputComponent
            passRef={passwordRef}
            defaultValue={values.password}
            onChange={handleChange('password')}
            placeholder="Password"
            errorMessage={errors.password}
            isPassword
            width="45%"
          />
          <InputComponent
            passRef={confirmPasswordRef}
            defaultValue={(values as any).password_confirmation}
            onChange={handleChange('password_confirmation')}
            placeholder="Password Confirmation"
            errorMessage={errors.password_confirmation}
            isPassword
            // width="40%"
          />
        </ContainerInputs>
        <ContainerButtons>
          <ButtonComponent onClick={() => resetForm()} outlined>
            Clear Fields
          </ButtonComponent>

          <ButtonComponent
            onClick={handleSubmit}
            disabled={!isValid}
            styles={{ opacity: !isValid || loading ? 0.5 : 1 }}
          >
            Save
          </ButtonComponent>
        </ContainerButtons>
      </BGContainer>
    </Container>
  )
}

export default Register
