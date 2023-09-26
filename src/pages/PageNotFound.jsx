import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const { data, status, statusText } = useRouteError();
  return (
    <div className="w-full h-screen bg-slate-700 flex items-center justify-center">
      <div className="bg-white p-10 rounded">
        <h1 className="text-7xl font-bold mb-2">{status}</h1>   
        <h2 className="text-3xl mb-2">{data}</h2>
        <p className="text-xl">{statusText}</p>
      </div>
    </div>
  );
};

export default PageNotFound;
