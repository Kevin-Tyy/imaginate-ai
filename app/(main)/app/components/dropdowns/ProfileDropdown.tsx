import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export function ProfileDropdown({ children, openModal }: { children: React.ReactNode; openModal: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] relative right-10">
        <div className="p-4 flex items-center gap-3">
          <div className="relative bg-gray-400/30 w-[58px] h-[58px] grid place-content-center rounded-full">
            <h1 className="text-2xl font-semibold">SA</h1>
            <div className="bg-[#28C76F] border-4 border-white h-5 w-5 absolute -bottom-1 -right-1 rounded-full" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Sheraz A.</h1>
            <p className="text-[#343434]">sheraz@gmail.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex gap-3" onClick={openModal}>
            <Image src="/icons/user-check.svg" alt="" width={22} height={22} />
            Account Info
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-3" onClick={openModal}>
            <Image src="/icons/settings.svg" alt="" width={22} height={22} />
            Setting
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href="/app/faq">
          <DropdownMenuItem className="flex gap-3">
            <Image src="/icons/info-circle.svg" alt="" width={22} height={22} />
            FAQ
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <button className="relative flex select-none items-center rounded-lg p-4 outline-none  w-full gap-3 text-[#D9000B] hover:bg-[#D9000B]/10 cursor-pointer">
          <Image src="/icons/logout.svg" alt="" width={22} height={22} />
          Sign out
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
