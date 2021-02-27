import React from 'react'
import { Meta } from '@storybook/react'

import { Button } from '.'

type Args = {
  children?: React.ReactNode
}

export const Basic: React.VFC<Args> = ({ children }) => (
  <Button>{children}</Button>
)

export default { title: 'Button', args: { children: 'hello' } } as Meta<Args>
