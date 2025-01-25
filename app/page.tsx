import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (

    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl text-blue-500">Hello World</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />

      <Button>Click me</Button>




    </div>
  
  );
}
