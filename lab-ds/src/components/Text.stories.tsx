import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default{
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Lorem',
        size: 'md'
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj = {}/* cria um arquivo novo no storiesbook */

export const Small: StoryObj = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args:{
        size: 'lg'
    }
}