import React from "react";
import './style.css'
import Caption from "./ui/components/caption";
import List from "./ui/components/list";
import LeftList from "./ui/components/leftList";
import Cards from "./ui/components/cards";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Caption/>
                <header className="header">
                    <List/>
                </header>
                <main className="main">
                    <LeftList/>
                    <div className="cards">
                        <Cards src="https://img.gepur.com/products/45000/44132/webp/origins/44132_3_1.webp?1682594723" text="ДЖИНСОВИЙ ТОП-КОРСЕТ"/>
                        <Cards src="https://img.gepur.com/products/45000/43481/webp/origins/43481_11_1.webp?1676552776" text="МАЛИНОВИЙ КОРСЕТ-БЮСТЬЄ"/>
                        <Cards src="https://img.gepur.com/products/45000/43129/webp/origins/43129_5_1.webp?1678811872" text="БЕЖЕВИЙ КОРСЕТ НА КІСТОЧКАХ"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
