import "./sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link to="/transaksi">
          <li className="side-list">Transaksi</li>
        </Link>
        <Link to="/edukasi">
          <li className="side-list">Edukasi Pengolahan Sampah</li>
        </Link>
        <Link to="/penukaranpoin">
          <li className="side-list">Penukaran Poin</li>
        </Link>
        <Link to="/histori">
          <li className="side-list">Histori Transaksi</li>
        </Link>
      </ul>
    </div>
  );
}
