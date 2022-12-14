
import './styles/global.css';
import { Logo } from './logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/CheckBox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center">
     <header className="flex flex-col items-center">
      <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
     </header>
        <form className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">
              Endereço de e-mail
            </Text>
            <TextInput.Root>
              <TextInput.icon>
                <Envelope/>
              </TextInput.icon>
              <TextInput.Input  type="email" id="email" placeholder="Digite seu e-mail"/>
            </TextInput.Root>
          </label>
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">
              Sua senha
            </Text>
            <TextInput.Root>
              <TextInput.icon>
                <Lock/>
              </TextInput.icon>
              <TextInput.Input type="password" id="password" placeholder="********"/>
            </TextInput.Root>
          </label>
          
          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember"/>
            <Text size="sm" className="text-gray-200">
                Lembrar de mim por 30 dias
            </Text>
          </label>
          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>
        <footer className="flex flex-col items-center gap-4 mt-8">
          <a href="" className="text-gray-400 text-xs underline hover:text-gray-200">Esqueceu sua senha</a>
          <a href="" className="text-gray-400 text-xs underline hover:text-gray-200">Não possui conta? Crie uma agora</a>
         </footer>
    </div>
  )
}

