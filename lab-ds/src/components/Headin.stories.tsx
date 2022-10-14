import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default{
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

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