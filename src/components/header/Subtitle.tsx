import * as React from 'react'
import 'twin.macro'

interface SubtitleProps {
  subtitle?: string
}

const Subtitle = ({
  subtitle = 'Error: No Subtitle',
}: SubtitleProps): JSX.Element => <h2>{subtitle}</h2>

export default Subtitle
