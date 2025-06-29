
export function IconWrap ({
    icon,
    active,
    onClick,
    className
}:  {
    icon: React.ReactNode,
    active: boolean,
    onClick : () => void,
    className?: string
}){
    return (
        <div className={` ${active? 'bg-cyan-600 opacity-80' : 'bg-neutral-800'} p-2 rounded-lg hover:bg-neutral-700 
            hover:drop-shadow-sm duration-300 hover:cursor-pointer ${className}`}
            onClick={onClick}>
                {icon}
        </div>
    )
}