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
import Loading from 'components/Loading'
import Cookies from 'js-cookie'
import ButtonComponent from 'components/Button'
import {
  Container,
  ContainerAlignEnd,
  ContainerButtons,
  ContainerInputs,
  Separator,
} from './style'

const ChangePassword: React.FC = () => {
  /*
   *   CONTEXT
   */
  const { logOut } = useContext(DataContext)
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
  const {
    errors,
    resetForm,
    handleSubmit,
    isValid,
    values,
    handleChange,
  } = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      password_confirmation: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      oldPassword: yup
        .string()
        .required('Enter the password')
        .min(6, 'Password must contain at least 6 characters'),
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
    onSubmit: async (_values) => {
      setLoading(true)
      try {
        const userId = await Cookies.get('userId')

        const data = await EndPoints.changePassword(Number(userId), values)
        if (data) {
          await logOut()
        }
      } catch (error) {
        console.log('error', error)
        toast.error('Error the save , verify the datas and try again.')
      } finally {
        setLoading(false)
      }
    },
  })

  /*
   *   REFS
   */
  const oldPasswordRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef((values as any)?.password_confirmation)

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
    <>
      <Loading show={loading} />
      <Container>
        <Header />
        <BGContainer between>
          <TitleDefault
            title="Change Password"
            description="Change your password easily"
          />
          <ContainerInputs>
            <InputComponent
              passRef={oldPasswordRef}
              defaultValue={values.oldPassword}
              onChange={handleChange('oldPassword')}
              placeholder="Old Password"
              errorMessage={errors.oldPassword}
              isPassword
              width="45%"
            />
            <Separator />
            <InputComponent
              passRef={passwordRef}
              defaultValue={values.password}
              onChange={handleChange('.password')}
              placeholder="New Password"
              errorMessage={errors.password}
              isPassword
              // width="40%"
            />
            <Separator />
            <InputComponent
              passRef={confirmPasswordRef}
              defaultValue={(values as any).password_confirmation}
              onChange={handleChange('password_confirmation')}
              placeholder="Password Confirmation"
              errorMessage={errors.password_confirmation}
              isPassword
              width="45%"
            />
          </ContainerInputs>

          <ContainerButtons>
            <ButtonComponent secondary onClick={() => navigateTo('/dashboard')}>
              Back
            </ButtonComponent>
            <ContainerAlignEnd>
              <ButtonComponent onClick={() => {}} outlined>
                Clear Fields
              </ButtonComponent>

              <ButtonComponent
                onClick={() => {}}
                styles={{
                  opacity: !isValid ? 0.5 : 1,
                  transition: '1s all',
                }}
              >
                Change
              </ButtonComponent>
            </ContainerAlignEnd>
          </ContainerButtons>
        </BGContainer>
      </Container>
    </>
  )
}

export default ChangePassword
