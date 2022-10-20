import React from 'react'

import Hidden from '@mui/material/Hidden/Hidden'
import FilterIcon from 'assets/icons/filter-white.png'
import {
  Container,
  Icon,
  LineBottom,
  TextDescription,
  TextTitle,
} from './style'

interface HeaderPagesProps {
  title: string
  withIcon?: boolean
  description?: string
}

const HeaderPages: React.FC<HeaderPagesProps> = ({
  title,
  withIcon,
  description,
}) => {
  return (
    <>
      <Hidden smDown implementation="css">
        <Container withoutMargin={withIcon}>
          <TextTitle>{title}</TextTitle>

          {withIcon ? (
            <Icon src={FilterIcon} />
          ) : (
            <TextDescription>{description}</TextDescription>
          )}
        </Container>
        <LineBottom />
      </Hidden>

      <Hidden smUp implementation="css">
        <Container withoutMargin>
          <TextTitle>Today</TextTitle>
          <TextDescription>
            Below you can see your data today and, for changes, you can click on
            the filter icon.
          </TextDescription>
        </Container>
        <LineBottom />
      </Hidden>
    </>
  )
}

export default HeaderPages
