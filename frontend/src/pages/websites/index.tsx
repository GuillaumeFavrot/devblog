import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectPage } from '../../state/features/view'

export default function Websites() {

    //State access
	const page = useAppSelector(selectPage)

    let visibility = page === 'websites' ? 'flex' : 'none'
    
    return (
		<div style={{display: visibility}} className='page'>
		</div>
    )
}