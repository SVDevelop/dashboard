import React from 'react'
import { useDrag } from 'react-dnd'
// import { ItemTypes } from './Constants'
const ItemTypes = {
    CARD: 'card',
}

/**
 * Your Component
 */
export const Card = ({ isDragging, text, children }) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
        type: ItemTypes.CARD,
        item: { text },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
        }),
        []
    )
    return (
        <div ref={dragRef} style={{ opacity }}>
        {children}
        </div>
    )
}