import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

type Props = {
  children?: React.ReactNode
}

export const Button: React.VFC<Props> = ({ children }) => (
  <ChakraButton colorScheme="facebook">{children}</ChakraButton>
)
