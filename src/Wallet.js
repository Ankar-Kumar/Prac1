import React from 'react'
import ABI from './Abi.json';
import Web3 from 'web3';
function Wallet({saveState}) {
    // const [,] = useState(initialState)


    const change=async()=>{
        try {
					const web3 = new Web3(window.ethereum);
					await window.ethereum.request({ method: 'eth_requestAccounts' });
					const contract = new web3.eth.Contract(
						ABI,
						'0xBe8070f2EfC14052815e848898841D79A8454035'
					);
					//setConnected(false);
                    console.log(contract);
					saveState({ web3: web3, contract: contract });
				} catch (error) {
					alert('Please Install Metamask');
				}
    }
  return (
    <div>
        <button onClick={change}>connected metamask</button>
    </div>
  )
}

export default Wallet