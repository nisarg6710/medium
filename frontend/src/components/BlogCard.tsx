import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
} 

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blogs/${id}`}>
     <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
         <Avatar name={authorName} />  
            </div>
         <div className="flex justify-center flex-col pl-2 font-extralight">
         {authorName}
         </div>
         <div className="flex justify-center flex-col pl-1 text-sm">
            <Circle />
         </div>
         <div className="pl-1 font-thin text-slate-10 text-sm">
          {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div>
            {content.slice(0, 100)+ "..."}
        </div>
        <div className="pt-2 text-slate-400 text-sm font-thin">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>

    </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    const getInitials = (fullName: string) => {
        return fullName
            .split(" ")
            .map(word => word[0].toUpperCase())
            .join("");
    };
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} text-gray-600 font-extralight dark:text-gray-300`}>
        {getInitials(name)}
    </span>

    </div>

}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">
        
    </div>
}