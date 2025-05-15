import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import classes from "./Header.module.css";
import LowerHeader from "../LowerHeader/LowerHeader";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* {logo} */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              {/* {delivery} */}
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">
                  EN
                </option>
              </select>
            </a>
            {/* three components */}
            <a href="">
              <div>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
                <RiArrowDropDownFill />
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart size={40} />
              {/* <i>Cart</i> */}
              <span className="cartspan">0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
