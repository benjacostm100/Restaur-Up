import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))

}
export const openWhatsApp = () => {
  const phoneNumber = "34605623970";
  const message = "Hola, he visto la web de RestaurUP y me interesa mejorar la rentabilidad de mi restaurante. ¿Podéis ayudarme?";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

