import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10;
    }, 5000);
  }, []);

  return (
    <div>
      Hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default UseRef;
