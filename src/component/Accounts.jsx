import { useNavigate } from "react-router-dom";
import AuthFetch from "./AuthFetch";

const Accounts = () => {

   const navi = useNavigate();
    AuthFetch.get("https://real-pear-fly-kilt.cyclic.app/accounts")
    .then(y => console.log(y.data)).catch(y=> {

        navi("/");
    });
 
    return <div>
        Account
    </div>;
}


export default Accounts;