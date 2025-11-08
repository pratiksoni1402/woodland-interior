import {Crimson_Pro, Roboto } from "next/font/google";

export const CRIMSON = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style:['normal'],
  variable: '--font-crimson',
});

export const ROBOTO = Roboto({
  subsets:['latin'],
  display:'swap',
  weight:['400', '500', '700', '900'],
  style:['normal'],
  variable: '--font-roboto',
});