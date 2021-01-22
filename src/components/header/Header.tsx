import * as React from 'react'
import Name from './Name'
import Subtitle from './Subtitle'

interface HeaderProps {
  name: string
  subtitle: string
}

const Header = ({ name, subtitle }: HeaderProps): JSX.Element => (
  <div>
    <Name name={name} />
    <Subtitle subtitle={subtitle} />
  </div>
)

export default Header
