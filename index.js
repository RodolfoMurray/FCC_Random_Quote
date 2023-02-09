function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#111");

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/API/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        const colors = [
            "#16a085",
            "#27ae60",
            "#2c3e50",
            "#77B1A9",
            "#73AB57",
            "#472E32"

        ];



        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randIndex])
            setColor(colors[randColorIndex])
    }


    return (
        <wrapper id="quote-box">
        <div id="text" style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                        <>
                            <h5 id="author" className="card-title">- {randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>   
                        ) : (
                          <h2>Loading</h2>  
                        )}
                        <div className="row">
                            <button onClick={getNewQuote} className="btn btn-block btn-primary" id="new-quote">New Quote</button>
                            <a href="https://twitter.com/intent/tweet"  target="_blank" className="btn btn-block btn-warning" id="tweet-quote">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DSteve%2BJobs%26content%3DThe%2Bonly%2Bway%2Bto%2Bdo%2Bgreat%2Bwork%2Bis%2Bto%2Blove%2Bwhat%2Byou%2Bdo.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" className="btn btn-danger btn-block">
                            <i className="fa fa-tumblr"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </wrapper>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"))
