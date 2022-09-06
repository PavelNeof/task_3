import {ChangeEvent, useCallback, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';
import React from "react";
/*type ExType = {
    children:React.ReactNode
}*/

export const Example_4 = (/*props:ExType*/) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const ref = React.useRef<HTMLInputElement>(null);

    return (
        <div>
            <div>Lags when change value</div>
            return <input type="text" ref={ref} value={value} onChange={onChange}/>
            <SlowComponent/>
            {/*{props.children}*/}
        </div>
    );
};

/*
export const Example = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    return <input type="text" value={value} onChange={onChange}/>
}*/
