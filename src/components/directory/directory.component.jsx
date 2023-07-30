import Category from "../category/category.component";
import './directory.styles.scss'

import { categories } from "../../mock/categories";

const Directory = () => {
    return (
        <div className='directory-container'>
        {categories.map((category) => (
            <Category key={category.id} category={category}/>
        ))}
    </div>
    );
};

export default Directory;