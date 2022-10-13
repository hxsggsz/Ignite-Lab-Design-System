import '../styles/global.css';
import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react';
 
export default {
   title: 'components/Heading',
   component: Heading,
   args: {
      children: 'heading',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
   args: {
      size: 'lg',
   },
}

export const small: StoryObj<HeadingProps> = {
   args: {
      size: 'sm',
   },
}

export const CustomComponent: StoryObj<HeadingProps> = {
   args: {
      size: 'sm',
      asChild: true,
      children: (
         <h1>paragrafo</h1>
      )
   },
   argTypes: {
      children: {
         table: {
            disable: true,
         },
      },
      asChild: {
         table: {
            disable: true,
         },
      },
   }  
}