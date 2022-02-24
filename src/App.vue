<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div className="bg-body w-full min-h-screen flex items-center justify-center">

    <!-- card -->
    <div className="bg-card w-72 rounded-xl p-5 text-card-content">
        <!-- image -->
        <img className="w-full aspect-square rounded-md" src="./assets/images/image-equilibrium.jpg" alt="">

        <!-- card body -->
        <div className="py-5">        
          <!-- content body -->
          <div className="font-semibold pb-5">
            <h2 className="text-white font-bold">Equilibrium #3429</h2>
            <p className="pt-3 text-sm">Our Equilibrium collection promotes balance and calm.</p>          
          </div>

          <!-- Crypto details -->
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2 text-xs font-bold">
              <img className="w-2.5 object-contain" src="./assets/icons/icon-ethereum.svg" alt="">
              <span className="text-fluo-blue">0.041 ETH</span>
            </div>
            <div className="flex justify-end items-center space-x-2 text-xs font-bold">
              <img className="w-3 object-contain" src="./assets/icons/icon-clock.svg" alt="">
              <span>3 days left</span>
            </div>
          
          </div>

        </div>
        <!-- card footer -->
        <div className="flex items-center justify-start text-xs font-semibold space-x-3 pt-4 border-footer border-t-2">
          <!-- avatar -->
          <img className="w-7 object-contain rounded-full border border-white" src="./assets/images/kyulol.svg" alt="">

          <!-- creator details -->
          <p>Creation of <span className="text-white">Jules Wyvern</span></p>
        </div>
    </div>
  </div>

</template>

