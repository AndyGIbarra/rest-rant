const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/error404.jpg" alt="Error404" />
              <div>
                    Photo by <a href="https://unsplash.com/photos/JpTY4gUviJM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Visuals</a> on <a href="https://unsplash.com/@visuals">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = error404