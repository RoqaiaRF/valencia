import React from "react";

const Container = (props) => {
  return (
    <div className="valencia-app">
      <div className="container mx-auto">{props.children}</div>
      <footer>
        <span>© 2022-2023 Fareza جميع الحقوق محفوظة</span>
        <div>
          powered by{" "}
          <a target="_blank" href="https://www.fareza.net/">
            fareza.net
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Container;
