import React from "react";
import styles from "./ToolMenu.module.scss";
import CategoriesTool from "../CategoriesTool/Index";
import PriceTool from "../PriceTool";
import BrandTool from "../BrandTool";
import SizeTool from "../SizeTool";
import { useResize } from "../../utils/useResize";

const ToolMenu = () => {
  // Кастомным хуком проверяю размер окна
  const { isScreenXl } = useResize();
  return (
    <>
      {isScreenXl && (
        <div className={styles.container}>
          <CategoriesTool />
          <PriceTool />
          <BrandTool />
          <SizeTool />
        </div>
      )}
    </>
  );
};

export default ToolMenu;
