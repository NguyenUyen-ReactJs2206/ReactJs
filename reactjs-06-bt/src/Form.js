import BTVN_Form from "./BTVN_Form";
import {account, typeAccount, banks} from './API'


function Form() {

        return (
            <div className="Form">
              <BTVN_Form account={account} typeAccount={typeAccount} banks={banks}/>{}
            </div>
          );
        }    
export default Form;
        