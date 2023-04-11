import testData from "./assents/data.json";
import Card from "./components/Card/Card"; // Card.jsx
import Header from "./components/Header"; // Header/index.jsx
import { Footer } from "./components/Header";

const promoData = ["=)", "^_^", "O_o", "x_x", "=(", ";(", "0l0"];
// .map() => преобразовывает один елемент массива в другой элемент (для всех без исключения)

console.log(testData);

const Promo = (props) => {
    // props - объект - используется для передачи разных значений внутрь компонента
    return <div className="promo__block">
        <div className="promo__img"/>
        <p className="promo__text">{props.text || "-"}</p>
    </div>
}

const App = () => {
    const smiles = []
    for (let i = 0; i < promoData.length; i++) {
        if (i % 2) { // остаток от деления = true => !0
            smiles.push(<Promo key={`sm${i}`} text={promoData[i]}/>)
        }
    }
    return (
        <>
            <Header/>
            <div>
                <h1>First Page</h1>
                <div className="container">
                    {testData.map((pro, i) => (
                        <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />
                    ))}
                    {/* <Promo text="First"/>
                    <Promo text="Second"/>
                    <Promo text={4 * 10}/>
                    <Promo/> */}
                    {
                        // [<span>1</span>,2,<div>3</div>,4,<a href="">5</a>]
                    }
                    {promoData.map(el => <Promo key={`${el}1`} text={el}/>)}
                    <Promo/>
                    {promoData.map(el => <Promo key={`${el}2`} text={el}/>)}

                    <Promo text={promoData[1]}/>
                    <Promo text={promoData[2]}/>
                    {smiles}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App;