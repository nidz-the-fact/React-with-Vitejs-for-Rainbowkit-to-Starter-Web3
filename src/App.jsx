import Navbar from './components/Navbar';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { parseEther, parseUnits } from 'viem';
import {
  useWriteDepositCustomGasToken, useWriteInitiateWithdrawalETH,
  useWriteProveWithdrawalTransaction, useWriteFinalizeWithdrawalTransaction
} from 'opstack-kit';

function App() {
  const { writeDepositCustomGasToken } = useWriteDepositCustomGasToken();
  const { writeInitiateWithdrawalETH } = useWriteInitiateWithdrawalETH()
  const { writeProveWithdrawalTransaction } = useWriteProveWithdrawalTransaction()
  const { writeFinalizeWithdrawalTransaction } = useWriteFinalizeWithdrawalTransaction()

  const [prove, setProve] = useState('');
  const [finalize, setFinalize] = useState('');

  const { address } = useAccount();
  // const [amount, setAmount] = useState('');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  return (
    <>
      <div>
        {/* 
        // @title Determine the correct use of React components (<Header /> for example).
        // @notice Import Navbar (import Navbar from './components/Navbar';).
        // 
        // @custom:<Navbar />  -  Define code structure and usage data within components as designed.
        // other..
        */}
        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen mt-[-40px]">

          <br></br>
          <h1 className="text-3xl font-bold mt-4">Example for CustomGasToken</h1>
          <b>use npm i opstack-kit SDK</b>
          <button
            className="bg-gray-500 text-white px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText('npm i opstack-kit');
              alert('Setup to interact "npm i opstack-kit"');
            }}
          >
            SDK
          </button>
          <br></br>

          <p className="text-red-500 mb-2 text-center">
            <a className="hover:text-red-600" href="https://exp.jibchain.net/address/0x99999995641f09cFD8AE4469Fa2aF8cF6c12C33F?tab=write_contract#095ea7b3" target="_blank" rel="noopener noreferrer">
              Must <b>approve</b> the ERC20 <b>POM</b> token first. ↗︎
            </a>
            <br />
            to portalAddress: <span>0xc15A4B8C12f7596d2e92276888770324e90f2FB9</span> &nbsp;
            <button
              className="bg-gray-500 text-white px-2 py-1 rounded"
              onClick={() => {
                navigator.clipboard.writeText('0xc15A4B8C12f7596d2e92276888770324e90f2FB9');
                alert('Address copied to clipboard!');
              }}
            >
              Copy
            </button>
            <br />
            amount (unit256): {amount1 ? parseUnits(amount1, 18).toString() : '0'} &nbsp;
            <button
              className="bg-gray-500 text-white px-2 py-1 rounded"
              onClick={() => {
                const uint256Value = amount1 ? parseUnits(amount1, 18).toString() : '0';
                navigator.clipboard.writeText(uint256Value);
                alert('Value copied to clipboard!');
              }}
            >
              Copy
            </button>
          </p>
          {/* Deposit CustomGasToken */}
          <input
            type="number"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
            placeholder="Enter amount 1"
            className="mb-4 p-2 border border-gray-300"
          />
          <button
            onClick={() =>
              writeDepositCustomGasToken({
                args: {
                  to: address,
                  mint: parseEther(amount1), /** */
                  value: parseEther(amount1),
                  // gasLimit: 21000n,
                  // isCreation: false,
                  // data: '0x',
                },
                l2ChainId: 7003, // Edit chainID "l2ChainId" select to L2 //
              })}
            disabled={!amount1}
            className="mb-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600"
          >
            Deposit CustomGasToken
          </button>
          {/* Deposit CustomGasToken */}

          <br></br>
          <br></br>

          {/* InitiateWithdrawal ETH */}
          <input
            type="number"
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
            placeholder="Enter amount 0.1"
            className="mb-4 p-2 border border-gray-300"
          />
          <button
            onClick={() =>
              writeInitiateWithdrawalETH({
                args: {
                  target: address,
                  // gasLimit: 21000n,
                  // data: '0x'
                },
                amount: parseEther(amount2),
                chainId: 7003, // Edit chainID "chainId" select to L2 //
              })}
            disabled={!amount2}
            className="mb-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600"
          >
            InitiateWithdrawal ETH
          </button>
          {/* InitiateWithdrawal ETH */}

          <br></br>
          <br></br>

          <p className="text-yellow-500 mb-2">You may have to wait a moment.</p>
          <b className="text-yellow-500">Waiting for state root</b>
          {/* Prove Withdrawal */}
          <input
            type="text"
            value={prove}
            onChange={(e) => setProve(e.target.value)}
            placeholder="Enter Prove withdrawalTx"
            className="mb-4 p-2 border border-gray-300"
          />
          <button
            onClick={() =>
              writeProveWithdrawalTransaction({
                args: {
                  withdrawalTxHash: prove,
                },
                l2ChainId: 7003, // Edit chainID "l2ChainId" select to L2 //
              })}
            disabled={!prove}
            className="mb-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600"
          >
            Prove Withdrawal
          </button>
          {/* Prove Withdrawal */}

          <br></br>
          <br></br>

          <b className="text-yellow-500">In challenge period</b>
          {/* Finalize Withdrawal */}
          <input
            type="text"
            value={finalize}
            onChange={(e) => setFinalize(e.target.value)}
            placeholder="Enter Finalize withdrawalTx"
            className="mb-4 p-2 border border-gray-300"
          />
          <button
            onClick={() =>
              writeFinalizeWithdrawalTransaction({
                args: {
                  withdrawalTxHash: finalize,
                },
                l2ChainId: 7003, // Edit chainID "l2ChainId" select to L2 //
              })}
            disabled={!finalize}
            className="mb-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600"
          >
            Finalize Withdrawal
          </button>
          {/* Finalize Withdrawal */}

        </div>
      </div>
    </>
  )
}

export default App
