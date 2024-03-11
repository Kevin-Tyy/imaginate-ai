import NavigationMenu from "./components/NavigationMenu";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F7FE] ">
      <div className="flex items-start">
        <div className="overflow-y-auto h-screen z-20">
          <Sidebar />
        </div>
        <div className="flex-1 w-full h-screen max-h-screen overflow-y-auto flex flex-col justify-start relative sm:pl-8">
          <NavigationMenu />
          {children}
        </div>
      </div>
    </main>
  );
}
