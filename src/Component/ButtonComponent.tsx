import { useEffect, useState } from "react";
import { HiCloudUpload } from "react-icons/hi";
import { filtername } from "../utils/FilterName";
type size = "small" | "medium"| "large";
type emphasis = "heavy"| "subtle"| "minimal";
type variant = "standard"| "highlight"|"utility";
type iconposition = "right"| "left";
type ButtonValues = {
    size:size,
    variant:variant,
    className: String | undefined,
    emphasis: emphasis,
    title: String | null,
    iconPosition: iconposition,
    iconOnly : boolean,
    onPress: ()=>void,
    isDisabled : boolean,
}

const ButtonComponent = (props:ButtonValues)=>{
    const {
        size = "medium",
        variant = "highlight",
        className = "",
        emphasis = "heavy",
        title="Button",
        iconPosition="right",
        iconOnly = true,
        onPress=(()=>{}),
        isDisabled =false
    } = props;

    const [classes, setClasses] = useState<string | undefined>(undefined);

    useEffect(()=>{
        const classesName = filtername("button",`button--${size}`, `button--${variant}`, "iconPosition--left");
        setClasses(classesName.join(" "));
    }, [variant, emphasis]);

    return(
        <div className="usb-button">
            <button 
              disabled={isDisabled} 
              className={classes}
            >
                {true && <span>{title}</span>}
                <HiCloudUpload />
            </button>
        </div>
    )
}
export default ButtonComponent;