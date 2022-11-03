import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import CrossmintLogo from "../../public/crossmint-logo.svg"

import {
    ArrowsRightLeftIcon,
    RectangleStackIcon,
    UsersIcon,
    UserIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/outline";

import Layout from "../../components/Layout";

function Page({title, children, data}) {


    const MenuItems: { title: string; href: string; disabled?: boolean }[] = [
        { title: "Account", href: `/user/account` },
        { title: "Collection", href: `/user/collection` },
        { title: "Transactions", href: `/user/transactions` },
        { title: "Linked Accounts", href: `/user/connections` },
        { title: "Support", href: `/support` },
    ];
    return(
        <>
        <Layout/>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
<div className="flex flex-col items-center justify-start flex-1 w-full  mt-12 mb-6 md:flex-row md:items-start xl:w-11/12">

<div className="flex flex-col w-full md:w-[265px] min-w-[265px] items-center justify-start md:mr-12">
    {/* TODO: Abstract this to a component like UserDataDisplay */}
    <div className="flex items-center justify-between w-full pb-4 mb-4 border-b">
        <Image
            src={CrossmintLogo}
            width={35}
            height={35}
            className="ml-2"
            alt="User Logo"
        />
        <div className="flex flex-col items-start justify-between flex-1 ml-3">
            <h1 className="text-[#20343E] font-semibold tracking-tight text-lg leading-tight">
                Nhi Nguyen
            </h1>
            <p className="text-sm text-[#8898A0] font-medium">
                nhi@crossmint.dev
            </p>
        </div>
    </div>
    <div className="flex items-center justify-start w-full mb-6 md:flex-col">
        {MenuItems.map((item) => {
            return (
                <MenuItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    disabled={item.disabled}
                />
            );
        })}
    </div>
    {/* {showTestMints && ( */}
        {/* <Button className="w-full" href="/admin/testing">
            Go to test mint page
        </Button> */}
    {/* )} */}
</div>

<div className="flex flex-col items-center justify-start w-full h-full mb-6">

    <h1 className="w-full pb-[30px] mb-2 border-b border-[#e9ecf1] font-semibold text-[#20343E] text-xl">
        Collection
    </h1>

    {data.length > 0 ? (<div className="py-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map(nft => (
                           
                            <a href={`/flow/wallets/${nft.locator}`} className="group"  key={nft.mintHash}>
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <Image width={280} height={320} src={nft.metadata.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                                </div>
                                <h3 className="mt-4 text-sm font-bold text-gray-700">{nft.metadata.name}</h3>
                                <p className="mt-1 text-xs text-gray-900 truncate">mintHash: {nft.locator}</p>
                            </a>
                            
                        ))}

                    </div>) : (<div className="max-w-7xl px-4 py-10 sm:px-6 text-center">
               <h1 className="font-bold text-3xl my-3">
                    No NFTs Found
               </h1>
               <p>We couldn't find anything in your collection</p>
               <p>Visit <a href="/flow/collections" className="hover:text-green-700 text-green-400">Collections </a> to buy NFT on our site</p>
            </div>)}
</div>
</div>
</div>
</>
    )
}

function MenuItem({ title, href, disabled = false }) {
    const { pathname } = useRouter();

    const match = pathname.indexOf(href) !== -1;

    const Icon = () => {
        switch (title) {
            case "Account":
                return <UserIcon className="w-6 h-6" />;
            case "Collection":
                return <RectangleStackIcon className="w-6 h-6" />;
            case "Transactions":
                return <ArrowsRightLeftIcon className="w-6 h-6" />;
            case "Linked Accounts":
                return <UsersIcon className="w-6 h-6" />;
            case "Support":
                return <LifebuoyIcon className="w-6 h-6" />;

            default:
                return null;
        }
    };

    const handleClick = disabled
        ? (e: any) => {
              e.preventDefault();
          }
        : undefined;

    if (disabled) {
        return null;
    }

    const menuItemClasses = classNames(
        "flex w-full rounded-lg h-[50px] items-center justify-center p-3 transition-all duration-100",
        match ? "bg-[#f2f4f5] text-[#424852]" : "bg-white text-[#8898a0] hover:opacity-70"
    );

    return (
        <Link href={href}>
            <a onClick={handleClick} className={menuItemClasses}>
                <div className="flex items-center justify-center">
                    <Icon />
                </div>

                <p className="flex-1 hidden ml-2 font-semibold md:flex md:text-lg">{title}</p>
            </a>
        </Link>
    );
}
export default Page

export function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps(context) {

    const res = await fetch("https://staging.crossmint.io/api/v1-alpha1/wallets/sol:9Q4uKgXZNo6pjJq5XDMToyGqeM4BgRTdRcg4Puixcivq/nfts", {
        headers: {
            'Content-Type': 'application/json',
            'X-PROJECT-ID': process.env.CROSSMINT_X_PROJECT_ID,
            'X-CLIENT-SECRET': process.env.CROSSMINT_X_CLIENT_SECRET
        }
    })
    const data = await res.json()

    return {
      props: { data }, // will be passed to the page component as props

    }
  }