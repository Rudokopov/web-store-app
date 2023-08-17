import React from "react";
import styles from "./ToolMenu.module.scss";
import CategoriesTool from "../CategoriesTool/Index";
import PriceTool from "../PriceTool";
import BrandTool from "../BrandTool";
import SizeTool from "../SizeTool";

const ToolMenu = () => {
  return (
    <div className={styles.container}>
      <CategoriesTool />
      <PriceTool />
      <BrandTool />
      <SizeTool />
    </div>
  );
};

export default ToolMenu;
