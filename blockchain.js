/**
 * NuroAI Launchpad Backend
 * Utility functions for interacting with the blockchain.
 */

const { ethers } = require("ethers");

// Connect to a blockchain provider
const provider = new ethers.providers.JsonRpcProvider(process.env.BLOCKCHAIN_URL);

// Interact with a smart contract
async function contributeToProject(contractAddress, signer, amount) {
  const abi = [
    // Add the relevant ABI here
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);
  const tx = await contract.contribute({ value: ethers.utils.parseEther(amount) });
  await tx.wait();
  return tx.hash;
}

module.exports = { contributeToProject };