import { Circle } from "./BlogCard"


export const BlogSkeleton = () => {

return <div role="status" className="animate-pulse">

    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div> 
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
             <div className="flex justify-center flex-col pl-1 text-sm">
                <Circle />
             </div>
             <div className="pl-1 font-thin text-slate-10 text-sm">
             <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>              </div>
            </div>
            <div className="text-xl font-semibold">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>            </div>
            <div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>            </div>
            <div className="pt-2 text-slate-400 text-sm font-thin">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>            </div>
    
        </div>


    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>


}