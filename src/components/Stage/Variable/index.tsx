import React, { ComponentType } from 'react'
import { IconProps } from 'grommet-icons'

export function Variable({ icon }: { icon: ComponentType<IconProps> }) {
    return React.createElement(icon, { size: 'medium' })
}

export default Variable