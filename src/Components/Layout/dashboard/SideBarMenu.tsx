 "use client"
import Separator from "@/Components/shared/Separator";
import { FilePenLine, LayoutDashboard, LibraryBig, MessageSquare, UserRoundCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const styleIcons = "size-5"

const SideBarMenuList = [
  {
    url: "/dashboard",
    title: "home",
    icon: <LayoutDashboard className={styleIcons} />
  },
  {
    url: "/dashboard/edit",
    title: "Edit Template",
    icon: <FilePenLine className={styleIcons}  />
  },
  {
    url: "/dashboard/account",
    title: "Account settings",
    icon: <UserRoundCog className={styleIcons}  />
  },
  {
    url: "/dashboard/template",
    title: "all template",
    icon: <LibraryBig className={styleIcons}  />
  },
  {
    url: "/dashboard/inbox",
    title: "Inbox",
    icon: <MessageSquare className={styleIcons}  />
  }
];

export default  function SideBarMenu({isMobile} : {isMobile: boolean}) {
  const pathname = usePathname()
  return <ul className="my-6 space-y-6">
    {SideBarMenuList.map((el, i) => (
      <div key={i}>
        {i === SideBarMenuList.length - 1 && <Separator className="my-6" />}
      <Link  className={`flex items-center gap-4 ${pathname === el.url && "bg-primary/60"} py-1 px-2 md:py-2 md:px-4 rounded-lg `} href={el.url}>
        {el.icon}
        {!isMobile && <h3 className="capitalize font-semibold text-xs">{el.title}</h3> }
      </Link>
      </div>
    ))}
  </ul>;
}
