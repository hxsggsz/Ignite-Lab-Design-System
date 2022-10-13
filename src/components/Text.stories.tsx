import '../styles/global.css';
import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';
 
export default {
   title: 'components/Text',
   component: Text,
   args: {
      children: 'texto',
      size: 'md',
   },
   argTypes: {
      size: {
         options: ['sm', 'md', 'lg'],
         control: {
            type: 'inline-radio',
         },
      },
   },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
   args: {
      size: 'lg',
   },
}

export const small: StoryObj<TextProps> = {
   args: {
      size: 'sm',
   },
}

export const CustomComponent: StoryObj<TextProps> = {
   args: {
      size: 'sm',
      asChild: true,
      children: (
         <p>paragrafo</p>
      )
   },
   argTypes: {
      children: {
         control: {
            disable: true,
         },
      },
      asChild: {
         table: {
            disable: true,
         },
      },
   },
}