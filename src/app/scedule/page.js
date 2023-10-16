/* eslint-disable @next/next/no-sync-scripts */

export default function scedule() {
    return (
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        

        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
        </button>

        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex justify-between pt-8 px-8">

                        <h3 class="mb-4 text-sm font-medium text-tosca">Batal</h3>
                        <h3 class="mb-4 text-md font-medium text-gray-900 ">Tambahkan penjadwalan</h3>
                        <h3 class="mb-4 text-sm font-medium text-tosca ">Tambah</h3>
                    </div>
                    <div class="px-6 py-6 lg:px-8">
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Judul kegiatan</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " placeholder="name@company.com" required/>
                            </div>
                            
                            <div class="relative max-w-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                            </div>

                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " required/>
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 


      
        <div class="p-4 sm:ml-64 ml-3">
            <div class="justify-end flex ">
                <button  type="button" class="inline-block align-middle text-white bg-tosca hover:bg-tosca-100 focus:ring-4 transition font-medium rounded-lg text-md px-3 py-2 mr-2 mb-2  focus:outline-none ">Penjadwalan <span class="material-symbols-outlined inline-block align-middle">
                start
                </span>
                </button>
            </div>
            <div class=" ">

                    <h1 class="font-bold inline text-[3rem] pr-3">Penjadwalan</h1>
                    <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class=" text-white bg-tosca hover:bg-tosca-100 focus:ring-4 transition font-medium rounded-lg text-md px-3 py-1 mr-2 mb-2  focus:outline-none"> 
                        <span class="material-symbols-outlined inline-block align-middle">
                            add
                        </span>                    
                    </button>
            </div>
            <div class="pl-2 border-l-8 rounded border-tosca">
                    
                    <div>
                        <b>Oppps!</b> kamu belum buat penjadwalan samsek nih 
                    </div>
                    
            </div>
            
            <div class="mt-8">

                <div class="border-l-8 border-gray-200  py-4 ">
                    <div class="relative pb-6">
                        <div class="absolute -left-3 -top-[25px]">
                            <span class="bg-gray-200  border-b-4  mr-3 border-white  px-2 rounded-full"></span>
                            <span class="font-bold">Kamis, 23 Oktober 2023</span>
                        </div>
                        <div class="shadow-lg p-5 pl-8 ml-3 mt-5 rounded-xl bg-gray-100">
                            <ul class="list-decimal">
                                <li>Nanem bang</li>
                                <li>Yakali langsung panen</li>
                            </ul>
                        </div>
                    </div>
                    <div class="relative pb-6">
                        <div class="absolute -left-3  ">
                            <span class="bg-gray-200  border-b-4  mr-4  border-white  px-2 rounded-full"></span>
                            <span class="font-bold text-white"><span class="bg-white mr-3 text-tosca rounded-sm">Hari Ini </span> Kamis, 23 Oktober 2023</span>
                        </div>
                        <div class="shadow-lg  rounded-xl bg-gray-100 ml-3 mt-5">
                            <div class="bg-tosca pl-5 py-3 rounded-t-md">
                                
                            </div>
                            <div class="p-5 pt-3 pl-8 ">
                                <ul class="list-decimal">
                                    <li>Nanem bang</li>
                                    <li>Yakali langsung panen</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="relative pb-6">
                        <div class="absolute -left-3 -top-[25px]">
                            <span class="bg-gray-200  border-b-4  mr-3 border-white  px-2 rounded-full"></span>
                            <span class="font-bold">Kamis, 23 Oktober 2023</span>
                        </div>
                        <div class="shadow-lg p-5 pl-8 ml-3 mt-5 rounded-xl bg-gray-100">
                            <ul class="list-decimal">
                                <li>Nanem bang</li>
                                <li>Yakali langsung panen</li>
                            </ul>
                        </div>
                    </div>
                    
                    
            
                </div>
            </div>
       
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        <script src="../node_modules/flowbite/dist/datepicker.js"></script>
   </>
    )
}