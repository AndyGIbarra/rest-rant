const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/tacos.jpg" alt="Tacos" />
                  <div>
                    Photo by <a href="https://unsplash.com/photos/lP5MCM6nZ5A?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Chad Montano</a> on <a href="https://unsplash.com/@briewilly">Unsplash</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home