import { Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default{
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        children: [           
            <TextInput.icon>
            <Envelope/>
            </TextInput.icon>,
            <TextInput.Input placeholder="Type your e-mail address"/>
        ],              
    },
    argTypes:{}
} as Meta<TextInputRootProps>

export const Default: StoryObj = {}/* cria um arquivo novo no storiesbook */

export const WithoutIcon: StoryObj = {
    args: {
        children: <TextInput.Input placeholder="Type your e-mail address"/>
    }
}