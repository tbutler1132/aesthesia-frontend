import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useGetWorldsQuery } from "../../app/services/worlds";

function World() {

    const { data, isLoading } = useGetWorldsQuery()

    console.log("World", isLoading, data)

    return (
        <div>
            <Nav />
            <p>Description</p>
            <div>
                Audio References Spotify API
            </div>
            <div>
                Art references
            </div>
            <div>
                tags
            </div>
            <button>Create</button>
            <Outlet />
        </div>
    );
}

export default World;