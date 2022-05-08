import {
  AROUND_CELLS,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../config/grid.config";
import {CellType} from "../../types/cell.type";
import {GripType} from "../../types/grip.type";
import {generateCellValue} from "../cell/cell.service";


export const generateLine = (nbColumns: number = MINIMAL_COLUMNS, generatorCell: () => CellType = () => generateCellValue()): CellType[] => {
  return Array.from(Array(nbColumns), () => generatorCell());
}
