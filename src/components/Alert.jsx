import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1500);
    return () => {
      // eslint-disable-next-line
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast">"{alertName}" добавлен</div>
    </div>
  );
};

export default Alert;
