import {
  RadixDappToolkit,
  DataRequestBuilder,
} from "@radixdlt/radix-dapp-toolkit";

// Inicializar toolkit
const rdt = RadixDappToolkit({
  dAppDefinitionAddress: "account_tdx_2_12y3allk5pgzrdw6rcrwxrvfua6nlx3vgfd9cxs678sjpyjzlvz0ghp", 
  networkId: 2, // stokenet (testnet)
  applicationName: "Mi Primera dApp",
  applicationVersion: "1.0.0",
});

// Pedir datos al usuario
rdt.walletApi.setRequestData(
  DataRequestBuilder.accounts().atLeast(1)
);

// Escuchar conexión
rdt.walletApi.walletData$.subscribe((walletData) => {
  console.log("Wallet data:", walletData);
});

window.openHow = function () {
  document.getElementById("howModal").classList.add("active");
};

window.closeHow = function () {
  document.getElementById("howModal").classList.remove("active");
};


window.openHow = function () {
  const modal = document.getElementById("howModal");

  modal.classList.add("active");

  document.getElementById("modalTitle").innerText = "How it Work";

  document.getElementById("modalContent").innerHTML = `
  <div class="legal-doc">
    <h2>Wallet Agent AI</h2>
  <p>
  Is a smart contract system deploy on Radix network that allows owner of a AI-agent to give thems a wallet with control of assets with
    programmable rules verificables on chain, limits, and permissions.
    Designed for security, automation and advanced DeFi uses cases.More info on the README.md of the project.
    </p>


    <div class="flow-box">    
Owner deploys PolicyVault → funds it → configures rules
↓
Agent receives a session badge (NFT)
↓
Agent calls wallet.transfer() / wallet.swap() / wallet.createConditionalOrder()
↓
PolicyVault verifies: valid badge + within spend limit + destination in whitelist
↓
Transaction executes on Radix — fully auditable on-chain
</div>


    <div class="how-step">
      <h3>1. Install SDK</h3>
      <p>Run the command below to install the wallet agent SDK into your project.So your agent could comunicate to the programatic wallet and use it.</p>
      <div class="flow-box">
      npm install wallet-agent-ai-radix
      </div>
    </div>

    <div class="how-step">
      <h3>2. Instantiate Contract</h3>
      <p>Create your on-chain contract instance and connect it to your Radix account.You need to do on these web and send and aprobe a Radix Tx, you are going
      to put the limits amounts and more stuff there.</p>
    </div>

    <div class="how-step">
      <h3>3. Manage Security</h3>
      <p>Configure whitelist wallets,personalize assets,  and others related rules for your agent wallet.</p>
    </div>
</div>
  `;
};

window.openAbout = function () {
  const modal = document.getElementById("howModal");

  modal.classList.add("active");

  document.getElementById("modalTitle").innerText = "About";

  document.getElementById("modalContent").innerHTML = `
    <p>
      Linux system admin for more than 30 years,with a fews code languages and skills,some projects developed overs these time, and a few of theirs on Radix network.
    </p>
  `;
};

window.openTerms = function () {
  const modal = document.getElementById("howModal");

  modal.classList.add("active");

  document.getElementById("modalTitle").innerText = "Terms & Conditions";

  document.getElementById("modalContent").innerHTML = `
  <div class="legal-doc">
  <p>
    By using the Wallet Agent AI application and its associated features, you agree to abide by these Terms & Conditions (T&Cs).
    Please read them carefully. If you do not agree to these terms, you should not use it.
  </p>

  <h3>1. ABOUT THIS SERVICE</h3>
  <p>
    Wallet-Agent-AI is a developed decentralized wallet built on the Radix network.
    It provides a user-owner interface for creating and managing the smart contract component that control the wallet of his agent on the Radix ledger.
    We does not operate or maintain the network, nor does it custody user funds or mediate transactions.
    All interactions occur directly on-chain using the agent own wallet.We does not guarantee uptime, accuracy, or feature availability.
  </p>

  <h3>2. LIMITATION OF LIABILITY</h3>
  <p>
    Users are solely responsible for any potential loss,or liability arising from the use of Wallet-Agent-AI.
    The developers will not be held liable for any losses, whether direct or consequential,
    stemming from the use of the application, including smart contract interactions, token swaps, etc.
  </p>

  <h3>3. THIRD-PARTY INTERACTIONS</h3>
  <p>
    Wallet-Agent-AI integrates with third-party services including the Astrolescent DEX AGGR for token swaps.
    Users acknowledge that we are not liable for actions of third parties.Token swap rates and availability are determined by external liquidity providers.
  </p>

  <h3>4. USER RESPONSIBILITIES</h3>
  <p>
    Users should only engage with Wallet-Agent-AI using assets they are willing to risk and must comply with all applicable laws and regulations in their jurisdiction.
  </p>

  <h3>5. SMART CONTRACT RISKS</h3>
  <p>
    Wallet-Agent-AI relies on smart contracts deployed on the Radix network.
    While developed with care, these contracts have not been formally audited.
    Smart contracts may contain bugs or vulnerabilities that could result in loss of funds.
    By using it, you accept this risk.
  </p>



  <h3>6. CHANGES TO TERMS</h3>
  <p>
    These Terms may be updated occasionally.
    Continued use of Wallet-Agent-AI after updates indicates acceptance of any revisions.
  </p>

</div>
    `;
};

window.openDisclaimer = function () {
  const modal = document.getElementById("howModal");

  modal.classList.add("active");

  document.getElementById("modalTitle").innerText = "Disclaimer";

  document.getElementById("modalContent").innerHTML = `
  <div class="legal-doc">
    <h3>1. DISCLAIMER</h3>
<p>
Experimental Software
Wallet-Agent-AI and its smart contracts are experimental and provided "as-is" without any warranties or guarantees. The interface may display incorrect or outdated information and may experience bugs or downtime. The payment execution system, including automatic and manual payment collection, may fail or behave unexpectedly.
</p>

<p>
Smart Contract Risks
Funds deposited into agent wallet are held by the agent at his own responsability. The contracts only Limit what the agent could do with it. 
The contract have not been formally audited — they could contain bugs, vulnerabilities, or logic errors
Its immutable once deployed — critical bugs may not be fixable without redeploying a new one.
Interact with external services — including the Astrolescent DEX for token swaps, which introduces additional risk
</p>

  <h3>2. DISCLAIMER OF WARRANTIES</h3>
  <p>
    To the fullest extent permitted by law, the developers disclaim all liability for any loss or damage
    resulting from the use of Wallet-Agent-AI or PolicyVault smart contracts.
  </p>
</div>
  `;
};

window.openPrivacy = function () {
  const modal = document.getElementById("howModal");

  modal.classList.add("active");

  document.getElementById("modalTitle").innerText = "Privacy Policy";

  document.getElementById("modalContent").innerHTML = `
  <div class="legal-doc">

  <h3>1. INTRODUCTION</h3>
  <p>
    This Privacy Policy explains how Wallet-Agent-AI handles information when you use the application.
    By using it, you agree to the practices described in this policy.
  </p>

  <h3>2. NO PERSONAL DATA COLLECTION</h3>
  <p>
    Wallet-Agent-AI is a decentralized application and does not collect, store, or process personal user data.
    No names, emails, passwords, or identity information are required to use the service.We dont use cookies or tracking scrips or any analytics tools that collect personal info.
  </p>

  <h3>3. WALLET-BASED INTERACTIONS</h3>
  <p>
    All interactions are performed using radix wallets.
    Wallet addresses may be visible on-chain as part of standard blockchain operations.
  </p>

  <h3>4. ON-CHAIN DATA</h3>
  <p>
    Transactions executed through Wallet-Agent-AI are recorded on the Radix public ledger.
    This data is immutable and publicly accessible as part of blockchain infrastructure.
    We does not control or modify on-chain records.
  </p>

  <h3>5. SECURITY</h3>
  <p>
    While Wallet-Agent-AI is designed with security in mind, users are responsible for securing their wallets and private keys.
  </p>

</div>
    `;
};



window.closeModal = function () {
  const modal = document.getElementById("howModal");

  modal.classList.remove("active");
};
