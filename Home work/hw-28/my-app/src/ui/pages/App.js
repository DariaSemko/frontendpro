import React from 'react';
import '../../style.css';
import Caption from "../components/caption";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.showResults = this.showResults.bind(this)
        this.smiles = [
            {id: 1, name: 'Smile 1', count: 0},
            {id: 2, name: 'Smile 2', count: 0},
            {id: 3, name: 'Smile 3', count: 0},
            {id: 4, name: 'Smile 4', count: 0},
            {id: 5, name: 'Smile 5', count: 0},

        ];
    }

    showResults() {
        let winner = this.smiles.reduce((prev, current) => (prev.count > current.count ? prev : current));
        const winnerElement = document.querySelector('.winner');
        winnerElement.innerHTML = `<h2>Winner: ${winner.name} (${winner.count} votes)</h2>`;
    }

    showClick (index, className) {
        const click = document.querySelector(className)
        click.innerHTML = this.smiles[index].count
}

    render() {
        return (
            <div className="App">
                <Caption/>
                <main className='main'>
                    <div className="image">
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/4f/070ccbbb696c2975bb0da521c2ffc5.webp'
                               onClick={() => {
                                   this.smiles[0].count += 1
                                   this.showClick(0, ".click")
                               }
                               }
                        />
                        <div className="click"></div>
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/55/ceb7ce388c8b07ffa8495e9d8905bd.webp'
                            onClick={() => {
                                this.smiles[1].count += 1
                                this.showClick(1,".click2" )
                            }
                            }
                        />
                        <div className="click2"></div>
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/27/f2d2f72f7e79b792bcb6f1019253ba.webp'
                            onClick={() => {
                                this.smiles[2].count += 1
                                this.showClick(2, ".click3")
                            }
                            }
                        />
                        <div className="click3"></div>
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/b6/006751651eeab3a5d8de403cc6bce0.webp'
                            onClick={() => {
                                this.smiles[3].count += 1
                                this.showClick(3, ".click4")
                            }
                            }
                        />
                        <div className="click4"></div>
                        <img alt='smile'
                            src='https://symbl-world.akamaized.net/i/webp/fd/dd5b841cf3eac8cbaa636a586f3c19.webp'
                            onClick={() => {
                                this.smiles[4].count += 1
                                this.showClick(4, ".click5")
                            }
                            }
                        />
                        <div className="click5"></div>
                    </div>
                    <button className='btn' onClick={() => {
                        this.showResults()
                    }
                    }>Show results
                    </button>
                    <div className='winner'>

                    </div>
                </main>
            </div>
        );
    }
}
export default App;
