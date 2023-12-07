import Header from "./Header"
import Cards from "./cards"
let Home = () => {
    let cardItem = () => {
        [
            {
                img: "http://www.w3.org/2000/svg",
                p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quas incidunt dolor sunt facere, labore deleniti! Ad eligendi esse atque explicabo molestias amet maxime, obcaecati aspernatur, libero fugit saepe dicta consectetur ea sunt eos!",
                eidts: "LL",
                viwes: "24 Viwes",
                mins: "9 mins"

            }
        ]
    }
    return (
        <>
            <Header />
            {cardItem.map((i) => <Cards Card={i} />)}

        </>
    )
}
export default Home;