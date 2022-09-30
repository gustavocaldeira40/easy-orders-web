import BGContainer from 'components/BGContainer'
import ButtonComponent from 'components/Button'
import Header from 'components/Header'
import InputComponent from 'components/Input'
import TitleDefault from 'components/TitleDefault'
import { useFormik } from 'formik'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CheckIcon from 'assets/icons/check.png'
import {
  Container,
  ContainerButton,
  ContainerInput,
  ContainerSendAgain,
  ContainerTimer,
  ContainerTop,
  IconSendAgain,
  TextTimer,
  TextTimerDescription,
} from './style'

const RecoveryPasswordCode: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const codeRef = useRef(null)

  /*
   *   STATES
   */
  const [counter, setCounter] = useState(10)
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
      code: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      code: yup
        .string()
        .required('Inform the email')
        .max(6, 'Maximum character size and 6'),
    }),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
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

  const resetTime = () => {
    setCounter(10)
  }

  /*
   *   EFFECTS
   */

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
  }, [counter])

  return (
    <Container>
      <Header />
      <BGContainer between>
        <ContainerTop>
          <TitleDefault
            title="Recovery Password"
            description="Enter the code you received in your email below."
          />
          <ContainerInput>
            <InputComponent
              passRef={codeRef}
              defaultValue={values.code}
              onChange={handleChange('code')}
              placeholder="Code"
              errorMessage={errors.code}
              onKeyDown={keyPress}
              width="100%"
              isInputNumber
            />
          </ContainerInput>

          {counter > 0 ? (
            <ContainerTimer>
              <TextTimerDescription>
                Submit the code again at:
              </TextTimerDescription>

              <TextTimer>{counter}</TextTimer>
              <TextTimerDescription>Seconds</TextTimerDescription>
            </ContainerTimer>
          ) : (
            <ContainerSendAgain
              onClick={() => {
                resetTime()
              }}
            >
              <IconSendAgain src={CheckIcon} alt="Send Again Icon" />
              <TextTimerDescription green>Send Code Again</TextTimerDescription>
            </ContainerSendAgain>
          )}
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
            Recovery
          </ButtonComponent>
        </ContainerButton>
      </BGContainer>
    </Container>
  )
}

export default RecoveryPasswordCode
