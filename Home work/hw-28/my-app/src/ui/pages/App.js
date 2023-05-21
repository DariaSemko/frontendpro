import React from 'react';
import '../../style.css';
import Caption from "../components/caption";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.showResults = this.showResults.bind(this)
        this.onClick = this.onClick.bind(this)
        this.state = {
            emojis:[
                {id: 1, name: 'Smile 1', count: 0},
                {id: 2, name: 'Smile 2', count: 0},
                {id: 3, name: 'Smile 3', count: 0},
                {id: 4, name: 'Smile 4', count: 0},
                {id: 5, name: 'Smile 5', count: 0},
        ],
            display: "none",
            winner:  ""
    }}

    show () {
        this.setState({
            display: "block"
        })
    }
    incrementCount (index) {
        this.state.emojis[index].count++
        return this.state.emojis[index]
}
    onClick (index) {
        const click = () => {
            this.setState(this.incrementCount(index))
        }
        return click
}

    showResults() {
        let smiles = this.state.emojis
        this.state.winner = smiles.reduce((prev, current) => (prev.count > current.count ? prev : current));
        this.show()
    }

    render() {
        const style = {
            display: this.state.display
        };
        const ClickCount = (props) => (
            <div id="results">
                {this.state.emojis[props.index].count}
            </div>
        )
        return (
            <div className="App">
                <Caption/>
                <main className='main'>
                    <div className="image">
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/4f/070ccbbb696c2975bb0da521c2ffc5.webp'
                               onClick={this.onClick(0, ".click")}
                        />
                        { this.state.emojis[0].count !==0 ? <ClickCount index={0} /> :null }
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/55/ceb7ce388c8b07ffa8495e9d8905bd.webp'
                             onClick={this.onClick(1, ".click2")}
                        />
                        { this.state.emojis[1].count !==0 ? <ClickCount index={1} /> :null }
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/27/f2d2f72f7e79b792bcb6f1019253ba.webp'
                             onClick={this.onClick(2, ".click3")}
                        />
                        { this.state.emojis[2].count !==0 ? <ClickCount index={2} /> :null }
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/b6/006751651eeab3a5d8de403cc6bce0.webp'
                             onClick={this.onClick(3, ".click4")}
                        />
                        { this.state.emojis[3].count !==0 ? <ClickCount index={3} /> :null }
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/fd/dd5b841cf3eac8cbaa636a586f3c19.webp'
                             onClick={this.onClick(4, ".click5")}
                        />
                        { this.state.emojis[4].count !==0 ? <ClickCount index={4} /> :null }
                    </div>
                    <button className='btn' onClick={
                        this.showResults
                    }>Show results
                    </button>
                    <div className='winner' style={style}>
                        <h2>Winner: {this.state.winner.name} ({this.state.winner.count} votes)</h2>
                    </div>
                </main>
            </div>
        );
    }
}
export default App;
