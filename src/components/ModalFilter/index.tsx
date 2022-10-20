import React from 'react'
import HeaderPages from 'components/HeaderPages'

import Modal from 'react-modal'
import { ContainerMinFilters, ContainerRow, ContainerTops, TextFilters } from './style'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

interface ModalProps {
  open: boolean
  handleCancel: () => void
}

const ModalFilter: React.FC<ModalProps> = ({ open, handleCancel }) => {
  const styleModal = {
    content: {
      width: '80%',
      height: '50%',
      backgroundColor: '#060607 ',
      borderRadius: 20,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25);',
      top: '30%',
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

  const filters = ['Ultima Semana', 'Ultimos 15 Dias', 'Ultimos 30 Dias']
  return (
    <Modal
      style={styleModal as any}
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
      </ContainerTops>
    </Modal>
  )
}

export default ModalFilter
