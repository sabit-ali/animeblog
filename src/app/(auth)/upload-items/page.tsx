"use client"
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { FileSchema } from '@/app/schemas/AvatarSchema';
import { Input } from '@/components/ui/input';

const Page = () => {
  const form = useForm({});

  const onSubmit = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    const img  = formData.append('avatar', data.file[0]); // Assuming `file` is an array

    // Make your API call with formData
    // await axios.post('/upload', formData);
    console.log(formData);
    const res = await axios.post(`/api/upload-items`,formData)
    console.log("res :: ",res)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=' h-screen flex w-full justify-center items-center'>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Controller
                  name="file"
                  control={form.control}
                  render={({ field: { onChange, onBlur, ref } }) => (
                    <input
                      type="file"
                      onChange={(e) => {
                        onChange(e.target.files);
                      }}
                      onBlur={onBlur}
                      ref={ref}
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Page;
