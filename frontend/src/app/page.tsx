import Header from "@/components/UI/Header";
import TodoComponents from "@/components/Todo/TodoComponents";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";

export default function Home() {
  return (
    <div className="font-kode grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:px-80 bg-violet-100 dark:bg-[#2c2636]">
      <main className="flex flex-col gap-8 row-start-2">
        <div className="fixed top-6 right-6">
          <ThemeToggle />
        </div>
        <Header />
        <div className="p-16 flex flex-col items-center text-gray-900 bg-white dark:bg-violet-100 shadow-lg">
          <TodoComponents />
        </div>
      </main>
    </div>
  );
}
