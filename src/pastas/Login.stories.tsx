import Login from './Login';
import '../styles/global.css';
import { expect } from '@storybook/jest'
import { within, waitFor, userEvent } from '@storybook/testing-library'
import { Meta, StoryObj } from '@storybook/react';
 
export default {
   title: 'pages/Login',
   component: Login,
   args: {},
   argTypes: {},
} as Meta

export const Default: StoryObj = {
   play: async ({ canvasElement }) => {
     const canvas = within(canvasElement)
 
     userEvent.type(canvas.getByPlaceholderText('jhondoe@example.com'), 'emailvalido@exemplo.com')
     userEvent.type(canvas.getByPlaceholderText('**********'), '12345678910')
 
     userEvent.click(canvas.getByRole('button'))
 
     await waitFor(() => {
       return expect(canvas.getByText('Login feito com sucesso!')).toBeInTheDocument()
     })
   }
 }