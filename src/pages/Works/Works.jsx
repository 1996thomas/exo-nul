import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import data from "../../assets/data";

export default function Works() {
  return (
    <>
      <div>Works</div>
      {data.map((item,i) => (
        <Link key={i} to={"/works/"+ item.client}>{item.client}</Link>
      ))}
      <Outlet/>
    </>
  );
}
