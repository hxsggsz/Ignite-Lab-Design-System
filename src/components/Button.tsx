import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export interface ButtonProps {
   children: ReactNode;
   asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
   const Comp = asChild ? Slot : 'h2';
   return (
      <Comp className={clsx(
         'py-2 px-5 bg-gray-500 rounded font-semibold text-white text-sm w-full transition hover:bg-gray-200 focus:ring-2 ring-white'
      )}>
         {children}  
      </Comp>
   )
}