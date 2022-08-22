import React, { useState } from 'react';
import EmptyLayout from '../../layouts/emptyLayout';
import { FaRegEnvelope } from 'react-icons/fa';
import Button from '../../../components/buttom';
import Input from '../../../components/Input';

export default function Login() {
  const [emailState, setEmailState] = useState<string>('');

  return (
    <>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-64 flex flex-col'>
          <h3 className='text-danger'>Entrar</h3>
          <div>
            <Input
              label='E-mail'
              type='email'
              icon={<FaRegEnvelope />}
              value={emailState}
              color="teal"
              onchange={(e) => setEmailState(e.target.value)}
            />
          </div>

          <Button color="teal" block="block">
            Entrar
          </Button>
        </div>
      </div>
    </>
  );
}

Login.Layout = EmptyLayout;
