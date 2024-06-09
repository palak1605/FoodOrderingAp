import { useContext } from "react";
import UserContext from "../../utils/UserContext";
function Footer() {
  const {User}=useContext(UserContext)
  return (
     <>
  <h1 className="p-10 text-bold">{User.name}</h1>
  <h2>{User.email}</h2>
  </>
  )
}

export default Footer