import './category.styles.scss'

const Category = ({ category }) => {
    const { title, subtitle, image } = category
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default Category
