import React, { useContext, useState, useRef, useEffect } from 'react'
import BGContainer from 'components/BGContainer'
import Header from 'components/Header'
import TitleDefault from 'components/TitleDefault'
import { useFormik } from 'formik'
import { DataContext } from 'context/app'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { EndPoints } from 'services/endpoints'
import Cookies from 'js-cookie'
import LetterAvatarComponent from 'components/LetterAvatar'
import moment from 'moment'
import {
  Container,
  ContainerChangeInformationsUser,
  ContainerDark,
  ContainerHeader,
  ContainerInputs,
  ContainerLetter,
  ContainerTexts,
  Line,
  TextLetter,
  TextNameUser,
  TextNick,
  TextTitle,
} from './style'

const UserData: React.FC = () => {
  /*
   *   CONTEXT
   */
  const { getUser, resolveError } = useContext(DataContext)

  /*
   *   REFS
   */

  const cepRef = useRef(null)
  const addressRef = useRef(null)
  const numberRef = useRef(null)
  const complementRef = useRef(null)
  const cityRef = useRef(null)
  const stateRef = useRef(null)
  const documentRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const hiddenButtonRef = useRef(null)

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null as any)
  const [disabled, setDisabled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [typePerson, setTypePerson] = useState({
    legalPerson: true,
    physicalPerson: false,
  })

  const [selectedDate, setSelectedDate] = useState(moment())
  const [baseImage, setBaseImage] = useState(null as any)

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
    values,
    resetForm,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      nickname: '',
      name: '',
      document: '',
      cep: '',
      address: '',
      number: '',
      complement: '',
      city: '',
      state: '',
      phoneNumber: '',
      birthday: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({}),
    onSubmit: async (_values, { setSubmitting }) => {
      setSubmitting(true)
      setLoading(true)

      const formData = {
        document:
          // Case the document is same
          Number(user?.document) === Number(values?.document)
            ? user?.document
            : typePerson?.physicalPerson
            ? values.document
                .replaceAll('.', '')
                .replace('/', '')
                .replace('-', '')
            : values?.document?.replaceAll('.', '')?.replace('-', ''),

        address: values?.address ? values?.address : '',
        number: Number(values?.number),
        complements: values?.complement ? values?.complement : '',
        city: values?.city ? values?.city : '',
        state: values?.state ? values?.state : '',
        phoneNumber:
          // Case the phoneNumber is same
          Number(user?.phoneNumber) === Number(values?.phoneNumber)
            ? user?.phoneNumber
            : values.phoneNumber
                .replace('(', '')
                .replace(')', '')
                .replace(' ', '')
                .replace('-', ''),
        birthday: selectedDate,
      }
      try {
        const data = await EndPoints.updateUser(Number(user?.id), formData)

        if (data) {
          toast.success('Successfully !')
          await getUserData()
        }
      } catch (error) {
        console.log('ERROR', error)
        const resolve = await resolveError(error, navigateTo)

        if (!resolve) {
          toast.error('Error the save , verify the datas and try again.')
        }
      } finally {
        setLoading(false)
      }
    },
  })

  /*
   *   FUNCTIONS
   */

  const searchAddress = async () => {
    if (values.cep?.length > 0) {
      setLoading(true)
      try {
        const data = await EndPoints.searchByCep(values.cep)

        if (data) {
          setFieldValue('address', data?.logradouro)
          setFieldValue('city', data?.localidade)
          setFieldValue('state', data?.uf)
        }
      } catch (error) {
        console.log('ERROR', error)

        const resolve = await resolveError(error, navigateTo)

        if (!resolve) {
          toast.error('Error fetching address, please try again!')
        }
      } finally {
        setLoading(false)
      }
    }
  }

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  const changeAvatar = async (files: any) => {
    setLoading(true)

    const formData = {
      file: files,
    }
    try {
      if (user) {
        const data = await EndPoints.createAvatar(user?.id, formData)

        await getUserData()
      }
    } catch (error) {
      console.log('ERROR', error)

      const resolve = await resolveError(error, navigateTo)

      if (!resolve) {
        toast.error('Error the save the avatar, try again !')
      }
    } finally {
      setLoading(false)
    }
  }

  const removeAvatar = async () => {
    setLoading(true)
    try {
      if (user?.avatar) {
        const data = await EndPoints.removeAvatar(user?.id)

        await getUserData()
      }
    } catch (error) {
      console.log('ERROR', error)
      const resolve = await resolveError(error, navigateTo)

      if (!resolve) {
        toast.error('Error the remove the avatar, try again !')
      }
    } finally {
      setLoading(false)
    }
  }

  //   Upgrade User
  const getUserData = async () => {
    setLoading(true)
    const id = Cookies.get('userId')
    try {
      const userActually = await getUser(Number(id))

      if (userActually !== null) {
        setUser(userActually)
      }
    } catch (error) {
      console.log('ERROR')
      const resolve = await resolveError(error, navigateTo)

      if (!resolve) {
        toast.error('Error the fetching data ...')
      }
    } finally {
      setLoading(false)
    }
  }

  const setFields = () => {
    setLoading(true)
    try {
      if (user?.document?.length === 11 && user?.document !== undefined) {
        setTypePerson({ legalPerson: true, physicalPerson: false })
      } else {
        setTypePerson({ physicalPerson: true, legalPerson: false })
      }
      setFieldValue('name', user?.name)
      setFieldValue('nickname', user?.nickname)
      setFieldValue('document', Number(user?.document))
      setFieldValue('phoneNumber', Number(user?.phoneNumber))
      setFieldValue('address', user?.address)
      setFieldValue('number', String(user?.number))
      setFieldValue('complement', user?.complements)
      setFieldValue('city', user?.city)
      setFieldValue('state', user?.state)
      setSelectedDate(user?.birthday)
    } catch (error) {
      console.log('ERROR THE SET FIELDS ', error)
    } finally {
      setLoading(false)
    }
  }

  /*
   *   EFFECTS
   */

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    if (user !== null) {
      setFields()
    }
  }, [user])
  return (
    <Container>
      <Header />
      <ContainerHeader>
        <TitleDefault
          title="Edit Profile"
          description="Some information to complete your profile, see below."
        />
      </ContainerHeader>
      <ContainerChangeInformationsUser>
        <ContainerLetter>
          <ContainerDark>
            <TextLetter>T</TextLetter>
          </ContainerDark>
        </ContainerLetter>
        <ContainerTexts>
          <TextNameUser>Gustavo</TextNameUser>
          <TextNick>@Test</TextNick>
        </ContainerTexts>
      </ContainerChangeInformationsUser>
      <ContainerInputs>
        <TextTitle>MOre Informations</TextTitle>
        <Line />
      </ContainerInputs>
    </Container>
  )
}

export default UserData
