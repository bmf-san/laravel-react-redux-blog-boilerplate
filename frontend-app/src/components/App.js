import React from 'react';
import {Link} from 'react-router';

// TODO React でかく utils内にコンポーネントとして構築
// (function() {
//     var burger = document.querySelector('.nav-toggle');
//     var menu = document.querySelector('.nav-menu');
//     burger.addEventListener('click', function() {
//         burger.classList.toggle('is-active');
//         menu.classList.toggle('is-active');
//     });
// })();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="columns is-marginless">
          <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
            <div>
              <div className="main">
                <div className="title">Main</div>
                <Link to="/dashboard" className="item active">
                  <span className="icon">
                    <i className="fa fa-tachometer"></i>
                  </span>
                  <span className="name">Dashboard</span>
                </Link>
                <Link to="/dashboard/posts" className="item active">
                  <span className="icon">
                    <i className="fa fa-list"></i>
                  </span>
                  <span className="name">Posts</span>
                </Link>
                <Link to="/dashboard/new-post" className="item active">
                  <span className="icon">
                    <i className="fa fa-pencil"></i>
                  </span>
                  <span className="name">NewPost</span>
                </Link>
                <Link to="/dashboard/categories" className="item active">
                  <span className="icon">
                    <i className="fa fa-th-list"></i>
                  </span>
                  <span className="name">Categories</span>
                </Link>
                <Link to="/dashboard/tags" className="item active">
                  <span className="icon">
                    <i className="fa fa-tags"></i>
                  </span>
                  <span className="name">Tags</span>
                </Link>
                <Link to="/dashboard/config" className="item active">
                  <span className="icon">
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="name">Config</span>
                </Link>
              </div>
            </div>
          </aside>
          <div className="column is-10 admin-panel">
            <nav className="nav has-shadow" id="top">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item" href="../index.html">
                    <h1 className="title">Rubel</h1>
                  </a>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu is-hidden-tablet">
                  <Link to="/dashboard" className="nav-item is-active">
                    Dashboard
                  </Link>
                  <Link to="/dashboard/posts" className="item active">
                    Posts
                  </Link>
                  <Link to="/dashboard/new-post" className="item active">
                    NewPost
                  </Link>
                  <Link to="/dashboard/categories" className="item active">
                    Categories
                  </Link>
                  <Link to="/dashboard/tags" className="item active">
                    Tags
                  </Link>
                  <Link to="/dashboard/config" className="item active">
                    config
                  </Link>
                </div>
              </div>
            </nav>
            {this.props.children}
          </div>
        </div>
        <footer className="footer admin-footer">
          <div className="container">
            <div className="has-text-centered">
              <p>
                <strong>Bulma</strong>
                by
                <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
