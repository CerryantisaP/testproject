import "./transaksi.css"
import React from "react";
import Popup from "reactjs-popup";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function transaksi() {
  return (
    <div className="transaction">
      <div className="contents-title">
      <h1>Transaksi</h1>
        <div className="content-wrapper">
          <div className="point-information">
            <div className="items1">
              <img className="trash-type" src="https://img.freepik.com/free-photo/utilization-empty-water-bottle_144627-6048.jpg?w=2000" />
              <p>Botol Plastik</p>
              <p>100 poin / kg</p>
            </div>
            <div className="items2">
              <img className="trash-type" src="https://img.freepik.com/free-photo/top-view-waste-with-organic-vegetables_23-2148666787.jpg?w=2000"/>
              <p>Sayuran / dedaunan organik</p>
              <p>10 poin / kg</p>
            </div>
          </div>
          <Popup trigger={<button className="inputToken-button"> masukkan token</button>} position="center">
          <div className="inputToken-form">
            <center>
            <h2>masukkan token</h2>
            <input type="text" placeholder="masukkan token disini"/>
            <button className="input-button">masuk</button>
            </center>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}
