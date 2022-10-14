import '../styles/global.css';
import { Logo } from '../Logo';
import { FormEvent, useState } from 'react';
import { Lock } from 'phosphor-react';
import { Text } from '../components/Text';
import { Envelope } from 'phosphor-react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Checkbox } from '@radix-ui/react-checkbox';
import { TextInput } from '../components/TextInput';

export function App() {
  const [ isUserLogin, setIsUserLogin ] = useState(false)
   function handlerSubmit(event: FormEvent) {
    event.preventDefault()
    setIsUserLogin(true)
    
  }

  return (
    <div className='flex w-screen h-screen text-white bg-black-500 justify-center flex-col items-center'>
      <header className='flex flex-col items-center'>
        <Logo />
        
        <Heading size='lg' className='mt-4'>Ignite Lab Design system</Heading>

        <Text className='mt-1 text-gray-500'>Faça o Login e acesse o nosso site!</Text>
      </header>

      <form onSubmit={handlerSubmit} className='flex flex-col items-stretch gap-5 mt-12 w-full max-w-[400px]'>
      { isUserLogin && <Text>Login feito com sucesso!</Text> }
        <label htmlFor='email' className='text-white'>
          <Text className='font-semibold' >Email:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email'id='email' placeholder='jhondoe@example.com' />
          </TextInput.Root>
        </label>

        <label htmlFor='Senha' className='flex flex-col'>
          <Text className='font-semibold' >Senha:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password'id='senha' placeholder='**********' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-500'>Lembrar de mim?</Text>  
        </label>
        
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default App
