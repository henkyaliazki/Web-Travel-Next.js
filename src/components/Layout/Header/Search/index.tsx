import Image from "next/image";

import SearchIcons from 'public/assets/icons/search-icon.svg'

const Search = () => {
    return (
        <form action="" className="flex items-center ml-8">
            <input
                type="text"
                placeholder="Kategori   |    Lokasi"
                className="border border-bg-gray-50 px-4 py-3 rounded-l-md text-sm text-gray-50"/>
            <button
                className="flex justify-center items-center bg-blue-100 border border-blue-100
                text-white text-sm rounded-r-md h-[46px] w-[46px]"
                type="submit"
            >
                <Image
                src={SearchIcons}
                height="24"
                width="24"/>
            </button>
        </form>
    )
}

export default Search