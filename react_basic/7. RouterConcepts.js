// ✅ Primary components

// React Router: request => components => conditional rendering

// 1. {BrowserRouter} => HTML5 History API  vs {HashRouter}
// imported from 'react-router-dom'

// 2. {Route} => Which components to render?
// ex. <Route path="___" component={_______} />

// 3. {Link}
// similalr to <a> tag, but prevent page from being converted
// ex. <Link to="__">____</Link>

// ✅ Path

// 1. Routes without a path always match.

// 2. Route with multiple paths => Array

// 3. exact, strict, sensitive => all three are boolean.

// - React Router does partial matching ❗
// => exact ✨
// <Route exact path="/" component={_______} />'
/*
    <Switch>
        <Route exact path="/users" component={Users} />
        <Route path="/users/create" component={CreateUser} />
    </Switch>
*/
// Without 'exact' prop, /users partially matches /users/create, so it would incorrectly return the Users route again.

// - Path with trailing slash(/)
// => strict ✨
/*
    <Route strict path="/one/">
        <About />
    </Route>
*/
// ex. location path: /one => no & /one/ => yes & /one/two => yes
// 'strict' mode can be used without slashes. => ❗ both 'exact' and 'strict' must be true.
// ex. location path: /one => yes & /one/ => no & /one/two => no

// - Case-sensitive path
// => sensitive ✨

// ✅ Route props (= passed into Route Component)
// all three are object!
// 1. match
// 2. location
// 3. history

// ✅ Dynamic URL ❓

// 1. URL parameter (in this case: 'menu')

// - 'match' (object) into Route component.
// - 'match.params.menu' => conditional rendering 👌

/*
function App() {
    return (
      <>
        <ul>
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/profiles">profiles</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
          <li>
            <Link to="Hook">hook</Link>
          </li>
          <li>
            <Link to="Context">context</Link>
          </li>
  
  
  
        </ul>
        <hr />
        <Route path="/main/:menu" component={MainTemplate} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route path="/hook" component={Hook} />
        <Route path="/context">
          <ColorProvider>
            <div>
              <SelectColors />
              <ColorBox />
            </div>
          </ColorProvider>
          <Theme />
        </Route>
      </>
    );
  }
*/

  // 2. URL query
  // - 'location' (object): embedded in every URL so that changes done on it are reflected on the location object.
  // - query = 'location.search'
  // - query(string) should be converted to object !
  // - parsing results are always string. ex.'./About.js'
  
  /* ex. http://localhost:3000/about?detail=true 
  {
      "pathname": "/about",
      "search": "?detail=true", 
      "hash": ""
  }
  */
  
  // ✅ History
  // provide easily usable methods.
/*
  function History(props) {
    const history = props.history;
  
    const goBack = () => {
      history.goBack();
    };
  
    const goHome = () => {
      history.push("/");
    };
  
    return (
      <>
        <button onClick={goBack}>move backward</button>
        <button onClick={goHome}>move to Home</button>
      </>
    );
  }
*/

  // ✅ Sub Route
  // go to Profiles.js file.
  
  // ✅ withRouter (function, Higher-Order Component)
  //  : pass updated match, location, and history props to the wrapped component(Route Component ❌) whenever it renders.
  
  // ✅ Switch
  // Renders the first child <Route> that matches the location.
  // <Switch> is unique in that it renders a route 'exclusively'.
  // In contrast, every <Route> that matches the location renders 'inclusively'.
  
  /*
  <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/:user">
        <User />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  */
  // Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/> will match and <Switch> will stop looking for matches and render <About>.
  
  // ✅ NavLink
  // : A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
  
  // 1. activeClassName: string
  // The class to give the element when it is active. The default given class is active.
  // This will be joined with the className prop.
  
  // 2. activeStyle: object
  // The styles to apply to the element when it is active.

  // ✅ Redirect
  // : Rendering a <Redirect> will navigate to a new location. 
  // The new location will override the current location in the history stack 
  
  // its props 
  // - to: string => The URL to redirect to. All URL parameters that are used in to must be covered by from.
  // - to: object => A location to redirect to.
  // => URL path or pathname can be any valid URL that path-to-regexp@^1.7.0 understands.
  // - push: bool => When true, redirecting will push a new entry onto the history instead of replacing the current one.
  // - from: string => A pathname to redirect from. Any valid URL path that path-to-regexp@^1.7.0 understands. 
  // => Note: This can only be used to match a location when rendering a <Redirect> inside of a <Switch>.
  // - exact: bool => This can only be used in conjunction with from to exactly match a location when rendering a <Redirect> inside of a <Switch>.
  // - strict: bool => This can only be used in conjunction with from to strictly match a location when rendering a <Redirect> inside of a <Switch>.
  // - sensitive: bool