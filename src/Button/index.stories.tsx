import React, { ComponentProps } from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import { Button } from '.'

type Args = ComponentProps<typeof Button>

export const Basic: React.VFC<Args> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default {
  args: {
    children: 'Hello',
    colorScheme: 'blackAlpha',
    onClick: action('onClick'),
  },
  title: 'Button',
} as Meta<Args>
