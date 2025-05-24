'use client';
import { useState } from 'react';
import {Input} from "@/shared/ui/Input/Input";
import { Button } from '@/shared/ui/Button/Button';

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    return (
        <form className="max-w-sm mx-auto p-4">
            <label htmlFor="email">
                <Input id='email'
                       type='email'
                       value={email}
                       placeholder='Email'
                       onChange={(e)=> setEmail(e.target.value)}
                >

                </Input>
            </label>
            <Button
            type='submit'
            >
                Login
            </Button>
        </form>
    );
};
