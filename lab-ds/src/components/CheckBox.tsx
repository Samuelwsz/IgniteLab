import { Check } from 'phosphor-react'
import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps extends CheckBoxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps){
    return(
        <CheckBoxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
            <CheckBoxPrimitive.Indicator asChild>
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckBoxPrimitive.Indicator>
        </CheckBoxPrimitive.Root>
    )
}

/*p-[2px] usuario decide o padding ex:2px*/