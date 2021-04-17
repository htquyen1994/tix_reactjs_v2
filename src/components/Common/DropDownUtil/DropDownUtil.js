import React, { useState, useEffect } from "react";
import useStyle from './style'

export default function DropDownUtil(props) {
    const items = props.data;
    const onChangeSelect = props.onChangeSelect;
    const width = props.width;
    const keyValue = props.keyValue;
    const textValue = props.textValue;
    const message = props.messageError;
    const description = props.description;
    const keyDescription = props.keyDescription;
    const classes = useStyle();
    // const [selected, setSelected] = useState(items[0]);
    // const [items, setItems] = useState(props.data);
    const [placeHolder, setPlaceHolder] = useState(props.placeHolder);

    const handleClick = (item) => {
        onChangeSelect(item);
        // setSelected({...item});
        if (description) {
            setPlaceHolder(item[keyDescription])
        } else {
            setPlaceHolder(item[textValue])
        }
    }

    const renderPlaceHolder = () => {
        if (placeHolder) {
            return placeHolder;
        } else {
            if (items.length > 0) {
                return items[0][textValue];
            } else {
                return ''
            }
        }
    }

    const renderValue = (item, index) => {
        if(description) {
            return  <a value={item[keyValue]} 
                        key={index} 
                        onClick={() => {handleClick(item)}} 
                        className="dropdown-item" >
                            {item[textValue]}
                            <p style={{fontSize: '12px', padding: '0', margin: '0'}}> {item[keyDescription]}</p>
                    </a>
        } else {
            return  <a value={item[keyValue]} 
                        key={index} onClick={() => {handleClick(item)}} 
                        className="dropdown-item" >
                            {item[textValue]}
                    </a>
        }
    }

    const renderDropdown = () => {
        return (<div className={`dropdown ${classes.dropDownCustom}`} style={{ width: `${width}`}}>
            <a className="dropdown-toggle" 
                data-toggle="dropdown" 
                style={{textOverflow: 'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}
                onClick={() => {
                    if (items.length === 0 ) {
                        props.handleError()
                    }

                }}
                >
            
                {
                    renderPlaceHolder()
                }
            </a>
            <div className="dropdown-menu">
                {
                    items.map((item, index) => {
                        return renderValue(item, index)
                    })
                }
            </div>
        </div>)
    }
    return (
        <div>
            {renderDropdown()}
        </div>
    )
}
