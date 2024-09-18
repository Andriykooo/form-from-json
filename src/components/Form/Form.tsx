"use client";

import { FC, useState } from "react";
import { Editor } from "../Editor/Editor";
import { useForm } from "react-hook-form";
import { generateDefaultValues } from "@/app/utils/helpers/generateDefaultValues";
import { FormElement } from "../FormElement/FormElement";
import { Button, Code } from "@nextui-org/react";
import { getFieldName } from "@/app/utils/helpers/getFieldName";
import { FormElements } from "@/app/utils/types/formElements.type";
import { initialFormElements } from "@/app/utils/constants/initialFormData";

export const Form: FC = () => {
  const [formElements, setFormElements] = useState(initialFormElements);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    getValues,
    reset,
  } = useForm({
    defaultValues: generateDefaultValues(initialFormElements),
  });

  const handleEditorChange = (editedData: FormElements[]) => {
    reset(generateDefaultValues(editedData));
    setFormElements(editedData);
  };

  const onSubmit = handleSubmit(() => {});

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
        {isSubmitted && (
          <Code className="text-white overflow-auto">
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </Code>
        )}
      </form>
      <Editor defaultValue={formElements} onChange={handleEditorChange} />
    </div>
  );
};
