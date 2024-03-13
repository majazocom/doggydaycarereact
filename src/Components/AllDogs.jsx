import SmallDogCard from "./SmallDogCard";

export default function AllDogs(props) {
    const allDogs = props.dogs;
    function handleClickedDog(dog) {
        console.log('clicked on a dog', dog.name);
    }
    return (
        <section className="allDogsContainer">
            <h2>All the dogs</h2>
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
