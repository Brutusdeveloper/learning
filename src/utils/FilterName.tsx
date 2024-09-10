import { FALSE } from "sass";

export const BOOLEAN_TRUE:boolean = true;
export const BOOLEAN_FALSE:boolean = false;
export const ISSTRING:string = "string";
export const ISNUMBER:string = "number";
export const ISOBJECT:string = "object";
const removeBoolean = (arg:String | boolean)=>
    (arg == BOOLEAN_TRUE || arg == BOOLEAN_FALSE || arg =="true" || arg=="false")
    ? BOOLEAN_TRUE 
    : BOOLEAN_FALSE;

const isNUllOrUndefined = (arg:any)=>
    (arg == null || arg == undefined) 
    ? BOOLEAN_TRUE 
    : BOOLEAN_FALSE;

const isString = (str:String | Object | Array<String | number>)=>{
    return typeof str == ISSTRING ? BOOLEAN_TRUE : BOOLEAN_FALSE;
} 
const isNumber = (str:String | Object | Array<String | number>)=>{
    return typeof str == ISNUMBER ? BOOLEAN_TRUE : BOOLEAN_FALSE;
} 
const isObject = (str:String | Object | Array<String | number>)=>{
    return typeof str == ISOBJECT ? BOOLEAN_TRUE : BOOLEAN_FALSE;
}
const isArray = (str:String | Object | Array<String | number>)=>{
    return Array.isArray(str) ? BOOLEAN_TRUE : BOOLEAN_FALSE;
}
export const filtername=(...classes:any)=>{
    const compliedclassList = Array.from(new Set(classes
        .filter((cls:any)=> !removeBoolean(cls) && !isNUllOrUndefined(cls))
        .map((cls:any)=>{
            if(isString(cls)){
                return cls.split(" ").filter((val:any) => !!val).map((val:any) => val.trim());
            }
            if(isNumber(cls)){
                return cls.toString();
            }
            if(isObject(cls)){
                return Object.keys(cls).filter((key)=>!removeBoolean(cls) && !isNUllOrUndefined);
            }
        }))
    ).flat();
    return compliedclassList
}