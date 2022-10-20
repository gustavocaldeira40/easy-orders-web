import React, { useState } from 'react'
import Card from 'components/Card'
import Header from 'components/Header'
import HeaderPages from 'components/HeaderPages'
import FilterIcon from 'assets/icons/filter.png'
import ModalFilter from 'components/ModalFilter'
import { Container, ContainerCards, ContainerFilter, IconFilter } from './style'

const Dashboard: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const arrCards = [
    { title: 'Total de Vendas', value: '352' },
    { title: 'Vendas em Andamento', value: '522' },
    { title: 'Vendas em Concluídas', value: '522' },
    { title: 'Total de Clientes', value: '522' },
    { title: 'Total de Pedidos', value: '10558' },
  ]

  const [modalFilter, setModalFilter] = useState(false)

  /*
   *   HOOKS
   */

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <>
      <Container>
        <Header withText="Welcome" />
        <HeaderPages
          title="Today"
          description=" Below you can see your data today and, for changes, you can click
              on the filter icon."
        />
        <ContainerCards>
          {arrCards?.map((item, index) => {
            return <Card title={item?.title} value={item?.value} key={index} />
          })}
          <ContainerFilter onClick={() => setModalFilter(true)}>
            <IconFilter src={FilterIcon} />
          </ContainerFilter>
        </ContainerCards>
      </Container>

      <ModalFilter
        handleCancel={() => setModalFilter(false)}
        open={modalFilter}
      />
    </>
  )
}

export default Dashboard
