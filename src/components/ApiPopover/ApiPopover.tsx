import { columns, rows } from "@/app/utils/constants/apiPopoverData";
import {
  Button,
  getKeyValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FC } from "react";

export const ApiPopover: FC = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button className="absolute z-10 right-2 top-2">API</Button>
      </PopoverTrigger>
      <PopoverContent className="text-white">
        <Table shadow="none">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody className="shadow-0" items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </PopoverContent>
    </Popover>
  );
};
