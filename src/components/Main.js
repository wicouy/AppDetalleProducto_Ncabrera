// import Contador from "./Contador"
import ItemDetailContainer from "./ItemDetailContainer";	

const Main = () => {

    const onAdd = () => {
        console.log("On Add")
    }

    return (
        <main>
            <h2>Home</h2>
            <div className="item-list">
                <ItemDetailContainer />
            </div>
            
        </main>
    )
}

export default Main