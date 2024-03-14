import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F7FE] text-primary-black text-[16px]">
      <div className="flex items-start gap-4">
        <Sidebar />
        <div className="flex-1 w-full h-screen max-h-screen overflow-y-auto flex flex-col justify-start relative">{children}</div>
      </div>
    </main>
  );
}
