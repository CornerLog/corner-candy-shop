import React, { useState } from "react";
import guestbookst from "../css/GuestBook.module.css";
import button1 from "../img/gb_submit_bt.svg";
import button2 from "../img/gb_submit_bt2.svg";

const GuestForm = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <form className={guestbookst.form}>
        <div className={guestbookst.redbox}>
        πκ³΅μ¬ μ€μλλ€π
        </div>
        <div className={guestbookst.formTop}>
          <div className={guestbookst.formName}>
            <label htmlFor="name">Name</label>
            <br />
            <input id="name" name="name" type="text" placeholder="Name" disabled></input>
          </div>
          <div>
            <label htmlFor="pw">Password</label>
            <br />
            <input id="pw" name="pw" type="password" placeholder="****" disabled></input>
          </div>
        </div>
        <div className={guestbookst.formBottom}>
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            name="content"
            id="content"
            cols="45"
            rows="12"
            placeholder="λ΄μ©μ μλ ₯νμΈμ."
            disabled></textarea>
        </div>
      </form>
      <button type="submit" className={guestbookst.button}>
        <img
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          id={guestbookst.img1}
          src={isHover ? button1 : button2}
          alt="λ²νΌ"
        />
        <span className={guestbookst.text}>SUBMIT</span>
      </button>
    </>
  );
};

export default GuestForm;
