import React from 'react'
import { Container} from './styles'

import apparel from '../../images/apparel.png'
import beauty from '../../images/beauty.png'
import shoes from '../../images/shoes.png'
import see from '../../images/see.png'

import CircleGradient from '../CircleGradient';
export default function CategoryItems() {
    return (
        <Container>
            <CircleGradient color1="#FF7676" color2="#FFAE4E" text="Apparel" img={apparel} width={37.5} height={37.52} />
            <CircleGradient color1="#76BAFF" color2="#4EFFF8" text="Beauty" img={beauty} width={30.97} height={36.8} />
            <CircleGradient color1="#2FC145" color2="#B4FF4E" text="Shoes" img={shoes} width={37} height={28.18} />
            <CircleGradient color1="#FFFFFF" color2="#FFFFFF" text="See All" img={see} width={10.3} height={18.03} />
        </Container>
    )
}