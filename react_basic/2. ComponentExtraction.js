// ❓ Problem: too much overlapping.
// difficult to modify and re-use components.

/*
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

  export default Comment;

*/

// ❗ Solution: Component extraction 🤍

/*
function Avatar (props) {
    return (
    <img className = 'Avatar'
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
    );
        }

function UserInfo(props) {
    return (
        <div className='UserInfo-name'>
            {props.user.name}
        </div>
    )
}

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <UserInfo user={props.author} />
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
        <hr/>
      </div>
    );
  }
*/