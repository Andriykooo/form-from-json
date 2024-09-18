import { isValidRegExpFormat } from "@/utils/helpers/isValidRegExpFormat";
import { stringToRegExp } from "@/utils/helpers/stringToRegExp";
import { FormElementType } from "@/utils/types/formElement.type";
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Textarea,
} from "@nextui-org/react";
import { FC, Fragment } from "react";
import { Control, Controller, ErrorOption } from "react-hook-form";

type FormElementProps = {
  name: string;
  element: FormElementType;
  control: Control;
  error?: ErrorOption;
};

export const FormElement: FC<FormElementProps> = ({
  name,
  element,
  control,
  error,
}) => {
  const errorMessage = error?.message;
  const isValid = !!error;

  const rules =
    element?.validation && isValidRegExpFormat(element.validation)
      ? {
          pattern: {
            value: stringToRegExp(element.validation),
            message: "The field is not valid",
          },
        }
      : {};

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        if (element.type === "text") {
          return (
            <Input
              {...field}
              label="Text"
              placeholder="Enter your text"
              isInvalid={isValid}
              errorMessage={errorMessage}
            />
          );
        }

        if (element.type === "number") {
          return (
            <Input
              {...field}
              type="number"
              label="Number"
              placeholder="Enter your number"
              min={element?.min_value}
              max={element?.max_value}
              isInvalid={isValid}
              errorMessage={errorMessage}
            />
          );
        }

        if (element.type === "longtext") {
          return (
            <Textarea
              {...field}
              label="Long text"
              placeholder="Enter your long text"
              minRows={5}
              maxRows={5}
              isInvalid={isValid}
              errorMessage={errorMessage}
            />
          );
        }

        if (element.type === "dropdown" && element?.options) {
          const selectedKey =
            element.value?.toString() || element.default_value?.toString();

          return (
            <Autocomplete
              {...field}
              key={selectedKey}
              label="Select an option"
              defaultSelectedKey={selectedKey}
              isInvalid={isValid}
              errorMessage={errorMessage}
              onSelectionChange={field.onChange}
            >
              {element.options.map((option) => (
                <AutocompleteItem
                  key={option}
                  value={option}
                  className="text-white"
                >
                  {option}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          );
        }

        return <Fragment />;
      }}
    />
  );
};
