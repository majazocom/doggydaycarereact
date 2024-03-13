import { useState } from "react";
import SmallDogCard from "./SmallDogCard";
import ClickedDog from "./ClickedDog";

export default function AllDogs(props) {
    const [showClickedDog, setShowClickedDog] = useState(false);
    const [clickedDog, setClickedDog] = useState({});
    const allDogs = props.dogs;
    function handleClickedDog(dog) {
        setClickedDog(dog);
        setShowClickedDog(true);
        console.log('clicked on a dog', dog.name);
    }
    return (
        <section className="allDogsContainer">
            <h2>All the dogs</h2>
            {
                showClickedDog ? <ClickedDog dog={clickedDog} /> : null
            }
            <section className="allDogsCards">
                {
                    allDogs.map((dog, i) =>
                        <SmallDogCard dog={dog} key={i} handleClick={() => handleClickedDog(dog)} />
                    )
                }
            </section>
        </section>
    )
}
