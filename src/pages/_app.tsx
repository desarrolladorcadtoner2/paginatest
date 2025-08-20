import "../styles/globals.css"; // Ajusta la ruta si es necesario
//import '@/styles/tabPanel.css'
import type { AppProps } from "next/app";

export default function MyApp({ Component }: AppProps) {
    const value = {
        appendTo: 'self',
        // Add valid properties here or remove the spread operator
    };

    return (


        <Component />


    );
}
