/* eslint-disable @next/next/no-sync-scripts */


export default function dashboard() {
   return (
       <>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

       <div class="p-4 sm:ml-64 ml-3">
<div class="justify-end flex ">

   <button type="button" class="inline-block align-middle text-white bg-tosca hover:bg-tosca-100 focus:ring-4 transition font-medium rounded-lg text-md px-3 py-2 mr-2 mb-2  focus:outline-none ">Aktifitas <span class="material-symbols-outlined inline-block align-middle">
   start
   </span>
   </button>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
   <div>
      <span>Kelembaban Tanah</span>
      <div class="text-white bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-[3.5rem] pr-3 text-end p-1 align-text-bottom pt-[3rem] text-center mr-2 mb-2 ">
         70%
      </div>
      <span>Status: <span class="text-green-600 font-bold">Normal</span></span>
   </div>
   <div>
      <span>Keasaman (pH)</span>
      <div class="text-white bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300  shadow-lg shadow-yellow-500/50  font-bold rounded-lg text-[3.5rem] pb-0 text-end p-2 align-text-bottom pt-[3rem] text-center mr-2 mb-2 pr-3 ">
         3.2
      </div>
      <span>Status: <span class="text-red-500 font-bold">Bahaya</span></span>
   </div>
   <div>
      <span>Kelembaban Udara</span>
      <div class="text-white bg-gradient-to-r from-purple-300 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-[3.5rem] pr-3 text-end p-1 align-text-bottom pt-[3rem] text-center mr-2 mb-2 ">
         50%
      </div>
      <span>Status: <span class="text-yellow-400 font-bold">Kurang</span></span>
   </div>
</div>
<div>
</div>

</div>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>

  </>
   )
}
