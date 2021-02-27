import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { DecoratorFn, Parameters } from '@storybook/react'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const emotionDecorator: DecoratorFn = (Story, context) => (
  <ChakraProvider>
    <Story {...context} />
  </ChakraProvider>
)

export const decorators: DecoratorFn[] = [emotionDecorator]
