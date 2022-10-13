import '../styles/global.css';
import { Button, ButtonProps } from './Button';
import { Meta, StoryObj } from '@storybook/react';
 
export default {
   title: 'components/Button',
   component: Button,
   args: {
      children: 'Button',
   },
   argTypes: {
      size: {
         options: ['sm', 'md', 'lg'],
         control: {
            type: 'inline-radio',
         },
      },
   },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}