import { Form } from "@/components/Form/Form";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-black font-[family-name:var(--font-geist-sans)] text-white">
      <div className="flex items-center mb-4 gap-4">
        <h1 className="font-bold text-xl">Form</h1>
      </div>
      <Form />
    </div>
  );
}
