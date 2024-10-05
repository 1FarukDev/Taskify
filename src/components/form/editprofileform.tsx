"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { InputField } from "../atoms/input"

// Define your validation schema
const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  avatar: z
    .any()
    .refine((file) => file && file.size <= 5000000, {
      message: "Avatar must be less than 5MB.",
    })
    .optional(),
})

export function EditProfileForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mt-10">
        
        <InputField
          control={form.control}
          name="firstName"
          label="First Name"
          placeholder="John"
        />

        
        <InputField
          control={form.control}
          name="lastName"
          label="Last Name"
          placeholder="Doe"
        />

        
        <InputField
          control={form.control}
          name="avatar"
          label="Avatar"
          type="file"
        />

        <Button type="submit" className="bg-black py-3 px-9 text-white rounded">Submit</Button>
      </form>
    </Form>
  )
}
