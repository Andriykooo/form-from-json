"use client";

import { FC, useState } from "react";
import { Editor } from "../Editor/Editor";
import { useForm } from "react-hook-form";
import { FormElement } from "../FormElement/FormElement";
import { Button, Code } from "@nextui-org/react";
import { initialFormElements } from "@/utils/constants/initialFormData";
import { FormElementType } from "@/utils/types/formElement.type";
import { generateDefaultValues } from "@/utils/helpers/generateDefaultValues";
import { getFieldName } from "@/utils/helpers/getFieldName";

export const Form: FC = () => {
  const [formElements, setFormElements] = useState(initialFormElements);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: generateDefaultValues(initialFormElements),
  });

  const handleEditorChange = (editedData: FormElementType[]) => {
    reset(generateDefaultValues(editedData));
    setFormIsValid(false);
    setFormElements(editedData);
  };

  const onSubmit = handleSubmit(() => {
    setFormIsValid(true);
  });

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <form
        className="flex flex-col w-full md:max-w-md gap-4"
        onSubmit={onSubmit}
      >
        {formElements.map((element, index) => {
          const name = getFieldName(index);

          return (
            <FormElement
              key={index}
              control={control}
              element={element}
              error={errors[name]}
              name={getFieldName(index)}
            />
          );
        })}
        <div className="flex justify-end">
          <Button color="primary" type="submit">
            Submit
          </Button>
        </div>
        {formIsValid && (
          <Code className="text-white overflow-auto">
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </Code>
        )}
      </form>
      <Editor defaultValue={formElements} onChange={handleEditorChange} />
    </div>
  );
};
