const ImageGrid = ({ Avatar }: { Avatar: string }) => {
  return (
    <div
      className="flex-1 border rounded-lg hover:flex-[10] transition-all duration-200"
      style={{
        backgroundImage: `url(${Avatar})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        transition: ".4s all",
      }}
    ></div>
  );
};
export default ImageGrid;
