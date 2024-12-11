"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addPersonnelsSchema, addUserSchema } from "@/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddUserForm from "@/components/user/userForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const personnelsRules = [
  { title: "منشنی", value: "secretary" },
  { title: "مسئول پذیرش", value: "receptionist" },
  { title: "پرستار", value: "nurse" },
  { title: "نسخه نویس", value: "prescription" },
];

const AddPersonnelsForm = () => {
  const [formStep, setFormStep] = useState(1);
  const form = useForm<z.infer<typeof addPersonnelsSchema>>({
    resolver: zodResolver(addPersonnelsSchema),
    defaultValues: {
      role: undefined,
      user: undefined,
    },
  });
  function onSubmit(values: z.infer<typeof addPersonnelsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newValue = { ...values.user, role: values.role };
    console.log(newValue);
  }
  const formValueSetter = (values: z.infer<typeof addUserSchema>) => {
    form.setValue("user", values);
    setFormStep((step) => step + 1);
  };

  // Determine the animation direction based on step change
  const animationProps =
    formStep > 1
      ? {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
        }
      : {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        };

  return (
    <div>
      <motion.div
        key={formStep}
        {...animationProps}
        transition={{ duration: 0.3 }}
      >
        {formStep === 1 && <AddUserForm formValueSetter={formValueSetter} />}
        {formStep === 2 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <ScrollArea className="h-[500px] w-full pr-2">
                <div className="flex flex-col gap-5 px-1 w-full my-2">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>سمت شغلی</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="یک سمت شغلی انتخاب کنید." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {personnelsRules.map((item, i) => (
                              <SelectItem key={i} value={item.value}>
                                {item.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Button
                  className="w-full mt-2"
                  variant={"outline"}
                  onClick={() => {
                    setFormStep((step) => step - 1);
                  }}
                >
                  مرحله قبل
                </Button>
                <Button className="w-full mt-2" type="submit">
                  تایید
                </Button>
              </div>
            </form>
          </Form>
        )}
      </motion.div>
    </div>
  );
};

export default AddPersonnelsForm;
