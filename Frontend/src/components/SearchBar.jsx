import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div>
            <div className="mb-2 lg:mb-1 flex items-center gap-2 rounded-full border-2 border-gray-200 py-1 px-3 flex-1 lg:w-2/3 mx-auto">
                <Search className="w-6 h-6 cursor-pointer text-gray-600"/>
                <input type="search" placeholder="Search" className="sm:text-2xl text-gray-700 w-full rounded outline-none"/>
            </div>
        </div>
    )
}

export default SearchBar