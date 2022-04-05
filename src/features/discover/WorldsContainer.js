import { useGetWorldsQuery } from '../../app/services/worlds';
import { Link } from 'react-router-dom'
import styles from './Discover.module.css';

//Container for worlds that are displayed on the discover page. Ex: "Popular", "Reccomended", "New", "Trending", "Favorites" etc
function WorldsContainer() {

    const { data, isLoading } = useGetWorldsQuery()

    //Fetch worlds, map cards

    if(isLoading) return <div>Loading...</div>
    return (
        <div className={styles.container}>
            <Link to={`/worlds/${data[0]._id}`}>
                {data[0]._id}
            </Link>
        </div>
    );
}

export default WorldsContainer;