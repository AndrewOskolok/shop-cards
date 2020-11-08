import React, { useState } from "react";
import img1 from "../../images/card-1.svg";
import img1x2 from "../../images/card-1@2x.png";
import img2 from "../../images/card-2.png";
import img3 from "../../images/card-3.jpg";
import img4 from "../../images/card-4.png";
import css from "./Products.module.css";

const Products = () => {
  const [quantity, setQuantity] = useState({ prod1: 1, prod2: 1, prod3: 1 });
  const [comparison, setComparison] = useState({
    prod1: false,
    prod2: false,
    prod3: false,
  });
  const [select, setSelect] = useState({
    prod1: false,
    prod2: false,
    prod3: false,
  });
  const [color, setColor] = useState({
    prod1: "Цвет",
    prod2: "Цвет",
    prod3: "Цвет",
  });

  const subHandler = ({ target }) => {
    const { name } = target;
    if (quantity[name] > 1) {
      setQuantity((state) => ({ ...state, [name]: state[name] - 1 }));
    }
  };

  const addHandler = ({ target }) => {
    const { name } = target;
    setQuantity((state) => ({ ...state, [name]: state[name] + 1 }));
  };

  const comparisonHandler = ({ target }) => {
    const { id } = target;
    setComparison((state) => ({ ...state, [id]: !state[id] }));
  };

  const selectHandler = ({ target }) => {
    const { id } = target;
    setSelect((state) => ({ ...state, [id]: !state[id] }));
  };

  const selectDisabledHandler = ({ target }) => {
    const { id } = target;
    setSelect((state) => ({ ...state, [id]: false }));
  };

  const colorHandler = ({ target }) => {
    const { id, innerText } = target;
    setColor((state) => ({ ...state, [id]: innerText }));
    setSelect((state) => ({ ...state, [id]: false }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <section className={css.products}>
      <div className={css.products__wrapper}>
        <ul className={css.products__list}>
          <li
            onMouseLeave={selectDisabledHandler}
            id="prod1"
            className={css.products__list_item}
          >
            <p className={css.products__list_item_status}>new</p>
            <div className={css.products__list_item_img_wrap}>
              <img
                className={css.products__list_item_img}
                src={img1}
                srcSet={`${img1x2} 2x`}
                width="256"
                height="261"
                alt="Шампунь"
              />
            </div>

            {!comparison.prod1 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison}
                id="prod1"
              >
                <span className="visually-hidden">comparison</span>
              </button>
            )}
            {comparison.prod1 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison_done}
                id="prod1"
              ></button>
            )}

            <h3 className={css.products__list_item_title}>Шампунь</h3>
            <p className={css.products__list_item_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <form className={css.products__list_item_form}>
              <div className={css.products__list_item_input_wrap_one}>
                <div className={css.products__list_item_color}>
                  <button
                    onClick={selectHandler}
                    id="prod1"
                    type="button"
                    className={css.products__list_item_color_picker}
                  >
                    {color.prod1}
                  </button>

                  {select.prod1 && (
                    <ul className={css.products__list_item_color_variable}>
                      <li
                        onClick={colorHandler}
                        id="prod1"
                        className={css.products__list_item_color_variable_item}
                      >
                        Желтый
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod1"
                        className={css.products__list_item_color_variable_item}
                      >
                        Красный
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod1"
                        className={css.products__list_item_color_variable_item}
                      >
                        Зеленый
                      </li>
                    </ul>
                  )}
                </div>

                <p className={css.products__list_item_price}>200 грн</p>
              </div>

              <ul className={css.products__list_item_radio_list}>
                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="100-1"
                    name="type"
                    type="radio"
                    value="100"
                    defaultChecked
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="100-1"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="100-1"
                  >
                    100
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="200-1"
                    name="type"
                    type="radio"
                    value="200"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="200-1"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="200-1"
                  >
                    200
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="300-1"
                    name="type"
                    type="radio"
                    value="300"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="300-1"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="300-1"
                  >
                    300
                  </label>
                </li>
              </ul>

              <div className={css.products__list_item_input_wrap_two}>
                <div className={css.products__list_item_quantity}>
                  <button
                    onClick={subHandler}
                    name="prod1"
                    type="button"
                    className={css.products__list_item_quantity_sub}
                  >
                    <span className="visually-hidden">subtract</span>
                  </button>
                  <p className={css.products__list_item_quantity_value}>
                    {quantity.prod1}
                  </p>
                  <button
                    onClick={addHandler}
                    name="prod1"
                    type="button"
                    className={css.products__list_item_quantity_add}
                  >
                    <span className="visually-hidden">add</span>
                  </button>
                </div>

                <button
                  onClick={submitHandler}
                  type="button"
                  className={css.products__list_item_buy}
                >
                  <span className={css.products__list_item_buy_text}>
                    Купить
                  </span>
                </button>
              </div>
            </form>
          </li>

          <li
            onMouseLeave={selectDisabledHandler}
            id="prod2"
            className={css.products__list_item}
          >
            <p className={css.products__list_item_status}>new</p>
            <div className={css.products__list_item_img_wrap}>
              <img
                className={css.products__list_item_img}
                src={img2}
                alt="Шампунь"
              />
            </div>

            {!comparison.prod2 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison}
                id="prod2"
              >
                <span className="visually-hidden">comparison</span>
              </button>
            )}
            {comparison.prod2 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison_done}
                id="prod2"
              ></button>
            )}

            <h3 className={css.products__list_item_title}>Шампунь</h3>
            <p className={css.products__list_item_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <form className={css.products__list_item_form}>
              <div className={css.products__list_item_input_wrap_one}>
                <div className={css.products__list_item_color}>
                  <button
                    onClick={selectHandler}
                    id="prod2"
                    type="button"
                    className={css.products__list_item_color_picker}
                  >
                    {color.prod2}
                  </button>

                  {select.prod2 && (
                    <ul className={css.products__list_item_color_variable}>
                      <li
                        onClick={colorHandler}
                        id="prod2"
                        className={css.products__list_item_color_variable_item}
                      >
                        Желтый
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod2"
                        className={css.products__list_item_color_variable_item}
                      >
                        Красный
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod2"
                        className={css.products__list_item_color_variable_item}
                      >
                        Зеленый
                      </li>
                    </ul>
                  )}
                </div>
                <p className={css.products__list_item_price}>200 грн</p>
              </div>

              <ul className={css.products__list_item_radio_list}>
                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="100-2"
                    name="type"
                    type="radio"
                    value="100"
                    defaultChecked
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="100-2"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="100-2"
                  >
                    100
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="200-2"
                    name="type"
                    type="radio"
                    value="200"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="200-2"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="200-2"
                  >
                    200
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="300-2"
                    name="type"
                    type="radio"
                    value="300"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="300-2"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="300-2"
                  >
                    300
                  </label>
                </li>
              </ul>

              <div className={css.products__list_item_input_wrap_two}>
                <div className={css.products__list_item_quantity}>
                  <button
                    onClick={subHandler}
                    name="prod2"
                    type="button"
                    className={css.products__list_item_quantity_sub}
                  >
                    <span className="visually-hidden">subtract</span>
                  </button>
                  <p className={css.products__list_item_quantity_value}>
                    {quantity.prod2}
                  </p>
                  <button
                    onClick={addHandler}
                    name="prod2"
                    type="button"
                    className={css.products__list_item_quantity_add}
                  >
                    <span className="visually-hidden">add</span>
                  </button>
                </div>

                <button
                  onClick={submitHandler}
                  type="button"
                  className={css.products__list_item_buy}
                >
                  <span className={css.products__list_item_buy_text}>
                    Купить
                  </span>
                </button>
              </div>
            </form>
          </li>

          <li
            onMouseLeave={selectDisabledHandler}
            id="prod3"
            className={css.products__list_item}
          >
            <p className={css.products__list_item_status}>new</p>
            <div className={css.products__list_item_img_wrap}>
              <img
                className={css.products__list_item_img}
                src={img3}
                alt="Шампунь"
              />
              <img
                className={css.products__list_item_img_back}
                src={img4}
                alt="Шампунь"
              />
            </div>

            {!comparison.prod3 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison}
                id="prod3"
              >
                <span className="visually-hidden">comparison</span>
              </button>
            )}
            {comparison.prod3 && (
              <button
                onClick={comparisonHandler}
                className={css.products__list_item_comparison_done}
                id="prod3"
              ></button>
            )}

            <h3 className={css.products__list_item_title}>Шампунь</h3>
            <p className={css.products__list_item_desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <form className={css.products__list_item_form}>
              <div className={css.products__list_item_input_wrap_one}>
                <div className={css.products__list_item_color}>
                  <button
                    onClick={selectHandler}
                    id="prod3"
                    type="button"
                    className={css.products__list_item_color_picker}
                  >
                    {color.prod3}
                  </button>

                  {select.prod3 && (
                    <ul className={css.products__list_item_color_variable}>
                      <li
                        onClick={colorHandler}
                        id="prod3"
                        className={css.products__list_item_color_variable_item}
                      >
                        Желтый
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod3"
                        className={css.products__list_item_color_variable_item}
                      >
                        Красный
                      </li>
                      <li
                        onClick={colorHandler}
                        id="prod3"
                        className={css.products__list_item_color_variable_item}
                      >
                        Зеленый
                      </li>
                    </ul>
                  )}
                </div>
                <p className={css.products__list_item_price}>200 грн</p>
              </div>

              <ul className={css.products__list_item_radio_list}>
                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="100-3"
                    name="type"
                    type="radio"
                    value="100"
                    defaultChecked
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="100-3"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="100-3"
                  >
                    100
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="200-3"
                    name="type"
                    type="radio"
                    value="200"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="200-3"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="200-3"
                  >
                    200
                  </label>
                </li>

                <li className={css.products__list_item_radio_list_item}>
                  <input
                    className={css.products__list_item_type}
                    id="300-3"
                    name="type"
                    type="radio"
                    value="300"
                    hidden
                  />
                  <label
                    className={css.products__list_item_type_label}
                    htmlFor="300-3"
                  ></label>
                  <label
                    className={css.products__list_item_value}
                    htmlFor="300-3"
                  >
                    300
                  </label>
                </li>
              </ul>

              <div className={css.products__list_item_input_wrap_two}>
                <div className={css.products__list_item_quantity}>
                  <button
                    onClick={subHandler}
                    name="prod3"
                    type="button"
                    className={css.products__list_item_quantity_sub}
                  >
                    <span className="visually-hidden">subtract</span>
                  </button>
                  <p className={css.products__list_item_quantity_value}>
                    {quantity.prod3}
                  </p>
                  <button
                    onClick={addHandler}
                    name="prod3"
                    type="button"
                    className={css.products__list_item_quantity_add}
                  >
                    <span className="visually-hidden">add</span>
                  </button>
                </div>

                <button
                  onClick={submitHandler}
                  type="button"
                  className={css.products__list_item_buy}
                >
                  <span className={css.products__list_item_buy_text}>
                    Купить
                  </span>
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
