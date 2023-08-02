import { useNavigate } from 'react-router-dom'

import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { title, subtitle, image, link } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(link)

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={image} />
            <Body>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem
