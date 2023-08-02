import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { title, subtitle, image } = category
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={image} />
            <Body>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem
