import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const { title, subtitle, image } = category
    return (
        <div className='directory-item-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='directory-item-body-container'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default DirectoryItem
