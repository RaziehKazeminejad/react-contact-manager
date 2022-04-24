import './sideBar.css';

export default function SideBar() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <p>Lists</p>
            <button className="btn">
              <p style={{ marginTop: '-4px' }}>+</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
