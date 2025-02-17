"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from 'axios'
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { transactionSchema } from "@/schemas/TransactionSchema"
import { toast } from "@/hooks/use-toast"
 

 
export default function AddTransactionForm() {
  // ...
  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      month: "",
      credit: "",
      debit: "",
      balance: ""
    },
  })

  const onSubmit = async(values: z.infer<typeof transactionSchema>) => {
    
    try {
      const response = await axios.post('/api/create_transaction', {
        ...values
      });
      toast({
        title: response.data.message,
        variant: 'default',
      });
      form.reset({ ...form.getValues(), month: '',balance:"",credit:"",debit:"" });
      console.log(response.data.message);
      
    } catch (error) {
      console.log(error )
    }
    //console.log(values)

  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto p-6 rounded-lg shadow-md dark:shadow-none border dark:border-gray-700 bg-background "
      >
        <section className="mb-12 space-y-4 flex flex-col items-center  w-full ">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700 uppercase font-semibold text-2xl">create new transaction</p>
        </section>
        {/* Month Field */}
        <FormField
          control={form.control}
          name="month"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Month
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter month"
                  className="bg-background border-input text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Debit Field */}
        <FormField
          control={form.control}
          name="debit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Debit
              </FormLabel>
              <FormControl>
                <Input
                  
                  placeholder="Enter debit amount"
                  className="bg-background border-input text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Credit Field */}
        <FormField
          control={form.control}
          name="credit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Credit
              </FormLabel>
              <FormControl>
                <Input
                  
                  placeholder="Enter credit amount"
                  className="bg-background border-input text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Balance Field */}
        <FormField
          control={form.control}
          name="balance"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Balance
              </FormLabel>
              <FormControl>
                <Input
                  
                  placeholder="Enter balance amount"
                  className="bg-background border-input text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}