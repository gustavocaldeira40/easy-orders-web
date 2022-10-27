import React, { useState, useEffect, useRef, useContext } from 'react'
import BlackContainer from 'components/BGContainer'
import Header from 'components/Header'
import Loading from 'components/Loading'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserData } from 'interfaces/user'
import { DataContext } from 'context/app'
import InputComponent from 'components/Input'
import ButtonComponent from 'components/Button'
import EditAvatarIcon from 'assets/icons/edit-avatar.png'
import { EndPoints } from 'services/endpoints'
import { toast } from 'react-toastify'
import TitleDefault from 'components/TitleDefault'
import {
  Container,
  ContainerAlignEnd,
  ContainerAvatarEdit,
  ContainerButtons,
  ContainerCenter,
  ContainerContent,
  ContainerDark,
  ContainerHeader,
  ContainerLetter,
  ContainerLink,
  ContainerLinks,
  Separator,
  TextLetter,
  TextLinkAvatar,
} from './style'

type StateType = {
  user: UserData
}

interface AvatarProps {
  fileName: string
  typeFile: string
}

const UserSettings: React.FC = () => {
  /*
   *   CONTEXT
   */
  const { verifyNickname, changeAvatar, resolveError } = useContext(DataContext)

  /*
   *   REFS
   */
  const nameRef = useRef(null)
  const nicknameRef = useRef(null)
  const hiddenButtonRef = useRef(null)

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)
  const [check, setCheck] = useState(true)
  const [avatar, setAvatar] = useState(null as any)
  const [baseImage, setBaseImage] = useState(null as any)

  /*
   *   HOOKS
   */
  const { state } = useLocation()
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
    setFieldValue,
    handleSubmit,
    isValid,
    values,
    handleChange,
  } = useFormik({
    initialValues: {
      id: '',
      name: '',
      nickname: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({}),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
      setLoading(true)

      const formData = {
        nickname: values?.nickname?.replace(' ', ''),
        name: values?.name,
      }

      try {
        // Upgrade Avatar
        await changeAvatar(avatar)

        // Upload datas
        const data = await EndPoints.updateUser(Number(values?.id), formData)
        if (data) {
          navigateTo('/user-data')
          toast.success('Successfully !')
        }
      } catch (error) {
        console.log('error', error)

        const resolve = await resolveError(error, navigateTo)

        if (!resolve) {
          toast.error('Error the change datas')
        }
      } finally {
        setLoading(false)
      }
    },
  })

  /*
   *   FUNCTIONS
   */
  const nicknameVerify = async (value: string) => {
    setFieldValue('nickname', value)
    try {
      const data = await verifyNickname(value)

      if (data === true && data !== undefined) {
        setCheck(true)
      } else {
        setCheck(false)
      }
    } catch (error) {
      const resolve = await resolveError(error, navigateTo)

      if (!resolve) {
        toast.error('Error verifycar nickname , reload screen and try again')
      }
    }
  }

  const editAvatar = async (file: any) => {
    const { files } = file.target as HTMLInputElement

    const objectUrl = URL.createObjectURL(file.target?.files[0])

    if (files && files.length !== 0) {
      setBaseImage(objectUrl)
      setAvatar(files[0])
    }
  }

  /*
   *   EFFECTS
   */
  useEffect(() => {
    if (state !== null) {
      const { user } = state as StateType
      setFieldValue('id', user?.id)
      setFieldValue('name', user?.name)
      setFieldValue('nickname', user?.nickname)
      setAvatar(user?.avatar)
    }
  }, [])

  return (
    <>
      <Loading show={loading} />

      <Container>
        <Header isHamburguer />
        <ContainerCenter>
          <BlackContainer>
            <TitleDefault
              title="User Settings"
              description="Change your Nickname and others datas."
            />

            <ContainerAvatarEdit>
              <ContainerLetter>
                <ContainerDark>
                  <TextLetter>T</TextLetter>
                </ContainerDark>
              </ContainerLetter>
              <ContainerLinks>
                <ContainerLink>
                  <TextLinkAvatar>Change Avatar</TextLinkAvatar>
                </ContainerLink>
                <TextLinkAvatar isRemove>Remover Foto</TextLinkAvatar>
              </ContainerLinks>
            </ContainerAvatarEdit>
            <ContainerContent>
              <InputComponent
                passRef={nameRef}
                defaultValue={values.name}
                value={values?.name}
                onChange={handleChange('name')}
                placeholder="Name"
                errorMessage={errors.name}
                // width="100%"
              />
              <Separator />
              <InputComponent
                passRef={nicknameRef}
                defaultValue={values.nickname}
                value={values.nickname}
                onChange={(e) => nicknameVerify(e.target.value)}
                placeholder="Nickname"
                check={check}
                errorMessage={errors.nickname}
                isCheck
                // width="100%"
              />
            </ContainerContent>

            <ContainerButtons>
              <ButtonComponent
                secondary
                onClick={() => navigateTo('/dashboard')}
              >
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
                  Save
                </ButtonComponent>
              </ContainerAlignEnd>
            </ContainerButtons>
          </BlackContainer>
        </ContainerCenter>
      </Container>
    </>
  )
}

export default UserSettings
