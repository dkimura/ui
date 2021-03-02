import React, { ComponentProps } from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import { Calendar } from '.'

type Args = ComponentProps<typeof Calendar>

export const Basic: React.VFC<Args> = props => <Calendar {...props} />

export default {
  args: {
    weekStartsOn: 0,
  },
  argTypes: {
    date: { control: { type: 'date' } },
    value: { control: { type: 'date' } },
  },
  title: 'Calendar',
} as Meta<Args>
