
import { Fragment } from "react/jsx-runtime";
import Button from "./Component/ButtonComponent";
import "./Component/ButtonComponent.scss";
import "./App.css";
import { ChangeEvent, useState } from "react";
type emphasis = "heavy"| "subtle"| "minimal";
type variant = "standard"| "highlight"|"utility";
function App() {
  const fetchUser=()=>({name:"vijay", age:22, isMarried:null});
  const[emphasis, setEmphasis] = useState<emphasis>("heavy");
  const[variant, setVariant] = useState<variant>("standard");
  const onHandleEmphasis =(event:ChangeEvent<HTMLSelectElement>)=>{
    const value = event.target.value as emphasis;
    setEmphasis(value);
  }
  const onHandleVariant =(event:ChangeEvent<HTMLSelectElement>)=>{
    const value = event.target.value as variant;
    setVariant(value);
  }
  return (
    <Fragment>
    <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
    <h3>Emphasis : </h3>
    <select name="emphasis" id="emphasis" defaultValue={"heavy"} onChange={(e)=>onHandleEmphasis(e)}>
      <option value="heavy">Heavy</option>
      <option value="subtle">Subtle</option>
      <option value="minimal">Minimal</option>
    </select>
    <h3>Variant : </h3>
    <select name="variant" id="variant" defaultValue={"standard"} onChange={(e)=>onHandleVariant(e)}>
      <option value="standard">Standard</option>
      <option value="highlight">Highlight</option>
      <option value="utility">Utility</option>
    </select>
    </div>
        <Button 
        size={"medium"} 
        variant={variant} 
        className={""} 
        emphasis={emphasis} 
        title={"aasd"} 
        iconPosition={"right"} 
        iconOnly={false} 
        onPress={()=>{}}
        isDisabled={false}/>
      </Fragment>
  );
}

export default App;
