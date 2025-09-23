

export const Header = ({title, description}: {title: string, description: string}) => {
    return (
      <div className="flex flex-col pt-17">
        <div className="text-5xl text-white font-bold">{title}</div>
        <div className="text-xl text-white/80 pt-3 ">{description}</div>
      </div>
    )
  }