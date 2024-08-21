const Sidebar = ({ word }) => {
  return (
    <div className=" h-full w-[6vw] border">
      <div className="flex flex-col h-full justify-evenly items-center font-[Archivo] text-8xl font-extrabold [-webkit-text-stroke:2px_#ffffff80] text-transparent m-1">
        {word.split("").map((char, idx) => {
          if(char==' '){
            return <div className="rotate-90 capitalize " key={idx} >&nbsp;</div>;
          }
          return <div className="rotate-90 capitalize " key={idx} >{char}</div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
