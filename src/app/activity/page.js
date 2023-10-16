/* eslint-disable @next/next/no-sync-scripts */


export default function activity() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

            <div class="p-4 sm:ml-64 ml-3">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/datepicker.min.js"></script>

  
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
                <div class="justify-end flex ">
                    <button type="button" class="inline-block align-middle text-white bg-tosca hover:bg-tosca-100 focus:ring-4 transition font-medium rounded-lg text-md px-3 py-2 mr-2 mb-2  focus:outline-none ">Penjadwalan <span class="material-symbols-outlined inline-block align-middle">
                    start
                    </span>
                    </button>
                </div>
                <h1 class="font-bold text-[3rem]">Aktifitas</h1>
                <div class="pl-2 border-l-8 rounded border-tosca">
                        <div>
                            <a href="#" class="inline-block align-middle text-white bg-tosca hover:bg-tosca-100 focus:ring-4 transition font-medium rounded-lg text-md p-1 pb-0 mr-2 mb-2  focus:outline-none">        
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                            </a>
                            <span class="align-baseline font-bold text-lg">
                                Tambah ke penjadwalan
                            </span>
                        </div>
                        <div>
                            <b>Nilai pH terlalu rendah,</b> disarankan untuk memberi pupuk <span class="bg-tosca text-white text-md font-medium mr-2 px-2.5 py-0.5 rounded ">NPK 21 (16-16-16)</span>
                        </div>
                </div>
                <div class="mt-5">
                    <div>
                        <h1 class="font-bold text-gray-400 text-xl pb-3 ">Kamis, 23 Agustus 2023</h1>
                        <div class="divide-y divide-slate-200 pl-3">
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Penyiraman Non Aktif</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-green-400 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Normal</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            6.2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-green-400 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Penyiraman Aktif</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3">
                                <span class="material-symbols-outlined pr-3">
                                    info
                                </span>
                                <span class="text-xl align-top font-medium">
                                    Kebun anda kemungkinan terkena <b> hujan berlebih </b>, kami akan <b>menyiram </b>untuk menetralkan nilai pH tanah
                                </span>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            8.7
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            8.2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Kelembaban Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            97%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div>
                        <h1 class="font-bold text-gray-400 text-xl pb-3 ">Kamis, 22 Agustus 2023</h1>
                        <div class="divide-y divide-slate-200 pl-3">
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Penyiraman Non Aktif</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-green-400 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Normal</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            6.2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-green-400 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Penyiraman Aktif</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3">
                                <span class="material-symbols-outlined pr-3">
                                    info
                                </span>
                                <span class="text-xl align-top font-medium">
                                    Kebun anda kemungkinan terkena <b> hujan berlebih </b>, kami akan <b>menyiram </b>untuk menetralkan nilai pH tanah
                                </span>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            8.7
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">pH Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            8.2
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3"> 
                                <div class="pl-2 border-l-[15px] rounded border-red-500 flex justify-between"> {/* loop here */}
                                    <div class=""> 
                                        <h1 class="text-2xl font-bold">Kelembaban Tanah Tinggi</h1>
                                        <h3 class="text-sm text-gray-500">Kemarin, 18:11:32</h3>
                                    </div>
                                    <div>
                                        <span class="font-bold text-[2.5rem] align-middle">
                                            97%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>

        </>
    )
}