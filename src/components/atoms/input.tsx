import { Control, FieldValues, Path, useController } from "react-hook-form"
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ReusableFieldProps } from "../Types/types"



export function InputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text", // Default input type is text
}: ReusableFieldProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <FormItem>
      <FormLabel className="text-[20px] text-gray-600">{label}</FormLabel>
      <FormControl>
        <Input type={type} placeholder={placeholder} {...field} className="border border-gray-400 h-[50px] rounded-xl"/>
      </FormControl>
      <FormMessage>{error ? error.message : null}</FormMessage>
    </FormItem>
  )
}
