import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)

function StarRating(){

    const renderStars = () => {
        const stars = []
        for(let i = 0; i < 6; i++){
            stars.push(<FontAwesomeIcon icon={["far", "star"]}/>)
        }
        return stars
    }

    return (
        <div class="rating">
            {renderStars()}
        </div>
    )
}

export default StarRating
