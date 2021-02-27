import React, { ComponentProps } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

type Props = ComponentProps<typeof ChakraButton>

export const Button: React.VFC<Props> = ({ children, ...props }) => (
  <ChakraButton {...props}>{children}</ChakraButton>
)
