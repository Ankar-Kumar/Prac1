import React from 'react'
import { useState,useEffect } from 'react';
function Hero({state}) {
       const [desc, setDesc] = useState('kansd');
				// const [cid, setCid] = useState('');
				useEffect(() => {
					
					const { contract } = state;
					console.log(contract);
					const descriptionfunc = async () => {
						const descriptionText = await contract.methods.description().call();
						setDesc(descriptionText);
                        console.log(descriptionText);
					};

					contract && descriptionfunc();
				}, [state]);
 
    return (
    <div>
        {desc}
    </div>
  )
}

export default Hero