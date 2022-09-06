import {memo, useEffect, useMemo} from "react";

export const SlowComponent = () => {
    //1)положить внутрь
    /*useEffect(()=>{let now = performance.now();

      while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
      }},[])*/
    //2)React.memo
    //3)вынести эту компоненту в App
    //4)вынести инпут в другую компоненту
    //5)использовать children <Example_4><SlowComponent/></Example_4>
    //6) useRef

    console.log('SlowComponent re-render...');

   let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }

    return <p>I am a very slow component tree.</p>;
}
