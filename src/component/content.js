import React from "react";
import Table from "./table";
import InfoModal from "./modal";

const Content = () => {
  return (
    <div className="container">
      <h3 className="display-4 text-center">List Posts</h3>
      <Table />
      <InfoModal />
    </div>
  );
};

export default Content;
