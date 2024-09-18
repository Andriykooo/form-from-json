import { ChangeEvent, useState } from "react";

import { Textarea } from "@nextui-org/react";
import { ApiPopover } from "../ApiPopover/ApiPopover";

type EditorProps<T> = {
  defaultValue: T;
  onChange: (value: T) => void;
};

export const Editor = <T,>({ defaultValue, onChange }: EditorProps<T>) => {
  const [data, setData] = useState(JSON.stringify(defaultValue, null, 2));
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setData(value);
    setIsInvalid(false);

    try {
      const parsedData = JSON.parse(value);
      onChange(parsedData);
    } catch {
      setIsInvalid(true);
    }
  };

  return (
    <div className="w-full relative">
      <ApiPopover />
      <Textarea
        value={data}
        onChange={handleChange}
        maxRows={20}
        isInvalid={isInvalid}
        errorMessage="Invalid JSON format"
      />
    </div>
  );
};
