// Info.jsx
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import "./Info.css"
import { useContext } from "react"
import { ReservationContext } from "../ReservationContext"

// Import shadcn form components
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Define Zod schema for validation
const infoSchema = z.object({
  firstName: z
    .string()
    .min(1, "Adınız gereklidir.")
    .regex(/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/, "Adınız sadece harflerden oluşmalıdır."),
  lastName: z
    .string()
    .min(1, "Soyadınız gereklidir.")
    .regex(/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/, "Soyadınız sadece harflerden oluşmalıdır."),
  countryCode: z
    .string()
    .min(2, "Geçerli ülke kodu giriniz.")
    .regex(/^\+\d+$/, "Ülke kodu geçerli değil."),
  phone: z
    .string()
    .min(7, "Telefon numarası en az 7 haneli olmalı.")
    .regex(/^\d+$/, "Telefon numarası sadece rakamlardan oluşmalıdır."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  allergyInfo: z.string().optional(),
})

function Info() {
  const { reservationData, setReservationData } = useContext(ReservationContext);
  const form = useForm({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      countryCode: "+90",
      phone: "",
      email: "",
      allergyInfo: "",
    },
  });

  const onSubmit = (values) => {
    // Update global state with form values
    setReservationData(prev => ({ ...prev, info: values }));
    console.log("Info form submitted:", values);
    // When backend is ready, you'll send reservationData to the server
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="info-form">

        <div className="fullname-container">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Adınız*" {...field} />
                </FormControl>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Soyadınız*" {...field} />
                </FormControl>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
        </div>

        <div className="phone-input">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem className="country-code-input">
                <FormControl>
                  <Input placeholder="+90" {...field} maxLength={4} />
                </FormControl>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="phone-number-input">
                <FormControl>
                  <Input placeholder="Telefon Numarası*" {...field} />
                </FormControl>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-Posta Adresiniz*" {...field} className="email-input" />
              </FormControl>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allergyInfo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Alerjen Bilgisi" {...field} />
              </FormControl>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />

        <Button type="submit" className="submit-button">
          Tamamla
        </Button>
      </form>
    </Form>
  );
}

export default Info;
