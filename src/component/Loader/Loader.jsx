import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center  items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
      <RotatingLines
        strokeColor="#1bbdfc"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
      />
    </div>
  );
}
