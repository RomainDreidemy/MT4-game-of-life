import {
  MINIMAL_COLUMNS,
} from "../../../config/grid.config";
import {CellType} from "../../../types/cell.type";
import {generateCellValue} from "./cell/cell.service";


export const generateLine = (nbColumns: number = MINIMAL_COLUMNS, generatorCell: () => CellType = () => generateCellValue()): CellType[] => {
  return Array.from(Array(nbColumns), () => generatorCell());
}
