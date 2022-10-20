import React, { useRef, useState } from 'react'
import HeaderPages from 'components/HeaderPages'

import Modal from 'react-modal'
import ButtonComponent from 'components/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputMaskComponent from 'components/InputMask'
import {
  ContainerAlignEnd,
  ContainerButtons,
  ContainerInput,
  ContainerMinFilters,
  ContainerRow,
  ContainerTextAndInput,
  ContainerTops,
  Separator,
  TextFilters,
  TextInAndAt,
} from './style'

// Animation Modal
import './style.css'

interface ModalProps {
  open: boolean
  handleCancel: () => void
}

const ModalFilter: React.FC<ModalProps> = ({ open, handleCancel }) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  const inRef = useRef(null)
  const atRef = useRef(null)

  /*
   *   STATES
   */
  const filters = ['Ultima Semana', 'Ultimos 15 Dias', 'Ultimos 30 Dias']
  const [loading, setLoading] = useState(false)
  /*
   *   HOOKS
   */

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
      in: '',
      at: '',
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
    },
  })

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <Modal
      closeTimeoutMS={200}
      style={styleModal}
      isOpen={open}
      onRequestClose={handleCancel}
    >
      <ContainerTops>
        <HeaderPages title="Filtrar Por" withIcon />
        <ContainerRow>
          {filters?.map((item, i) => {
            return (
              <ContainerMinFilters key={i}>
                <TextFilters>{item}</TextFilters>
              </ContainerMinFilters>
            )
          })}
        </ContainerRow>
        <ContainerInput>
          <ContainerTextAndInput>
            <TextInAndAt>In</TextInAndAt>
            <InputMaskComponent
              passRef={inRef}
              mask="99/99/9999"
              withoutBackground
              defaultValue={values.in}
              onChange={handleChange('in')}
              errorMessage={errors.in}
              width="100%"
              withMarginVertical
            />
          </ContainerTextAndInput>
          <Separator />
          <ContainerTextAndInput>
            <TextInAndAt>At</TextInAndAt>
            <InputMaskComponent
              passRef={atRef}
              mask="99/99/9999"
              withoutBackground
              defaultValue={values.at}
              onChange={handleChange('at')}
              errorMessage={errors.at}
              width="100%"
              withMarginVertical
            />
          </ContainerTextAndInput>
        </ContainerInput>
      </ContainerTops>
      <ContainerButtons>
        <ButtonComponent secondary onClick={() => handleCancel()}>
          Close
        </ButtonComponent>
        <ContainerAlignEnd>
          <ButtonComponent onClick={() => {}} outlined>
            Clear Fields
          </ButtonComponent>

          <ButtonComponent
            onClick={() => handleCancel()}
            styles={{
              opacity: !isValid ? 0.5 : 1,
              transition: '1s all',
            }}
          >
            Save
          </ButtonComponent>
        </ContainerAlignEnd>
      </ContainerButtons>
    </Modal>
  )
}

export const styleModal: Modal.Styles | undefined = {
  content: {
    width: '80%',
    height: '80%',
    backgroundColor: '#060607 ',
    borderRadius: 20,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25);',
    top: '12vh',
    left: '10%',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#00000055',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default ModalFilter
