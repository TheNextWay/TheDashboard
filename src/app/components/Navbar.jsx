export default function Navbar() {
    return(
        <>
             <div id="sidebar" class="fixed top-0 left-0 z-40 h-screen px-3 py-4 block md:hidden   transition-transform -translate-x-full bg-white w-64 rounded-tr-3xl" tabindex="-1" aria-labelledby="drawer-label">
            <button type="button" data-drawer-target="sidebar"  data-drawer-toggle="sidebar" aria-controls="sidebar" class="inline align-middle absolute top-5 left-60 left  text-white bg-tosca hover:bg-tosca-100 transition font-medium rounded-full text-md p-2 border-2 mr-2 mb-2  focus:outline-none  focus:rotate-180"> 
                <span class="material-symbols-outlined inline-block align-middle"> chevron_right </span>
            </button>
            <a href="https://thenextway.tech/" class="flex items-center pl-2.5 mb-12 ">
                <span class="p-2 text-xl text-white font-bold rounded bg-tosca mr-3">BS</span>
                <span class="capitalize w-12 font-bold">
                    Bapak Sanurdin
                </span>
            </a>
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                    insert_chart
                    </span>
                    <span class="ml-3">Beranda</span>
                    </a>
                </li>
                <li>
                    <a href="/activity" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                    browse_activity
                    </span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Aktifitas</span>
                    </a>
                </li>
                <li>
                    <a href="/scedule" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">        
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Penjadwalan</span>
                    </a>
                </li>
                <li class="border-t-2 pt-2 border-gray-200">
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Setelan Kebun</span>
                    </a>
                </li>
            </ul>
            <div class="mt-[21.5rem]">
                <a href="#" class="flex items-center p-2 text-white bg-tosca rounded-lg  group ">
                    <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                    <span class="material-symbols-outlined">
                        logout
                    </span>
                </a>
            </div>
        </div>

        <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64  h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
           
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 rounded-tr-3xl">
                    <a href="https://thenextway.tech/" class="flex items-center pl-2.5 mb-12 ">
                        <span class="p-2 text-xl text-white font-bold rounded bg-tosca mr-3">BS</span>
                        <span class="capitalize w-12 font-bold">
                            Bapak Sanurdin
                        </span>
                    </a>
                    

                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="material-symbols-outlined">
                        insert_chart
                        </span>
                        <span class="ml-3">Beranda</span>
                        </a>
                    </li>
                    <li>
                        <a href="/activity" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="material-symbols-outlined">
                        browse_activity
                        </span>
                        <span class="flex-1 ml-3 whitespace-nowrap">Aktifitas</span>
                        </a>
                    </li>
                    <li>
                        <a href="/scedule" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">        
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <span class="flex-1 ml-3 whitespace-nowrap">Penjadwalan</span>
                        </a>
                    </li>
                    <li class="border-t-2 pt-2 border-gray-200">
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="material-symbols-outlined">
                            settings
                        </span>
                        <span class="flex-1 ml-3 whitespace-nowrap">Setelan Kebun</span>
                        </a>
                    </li>
                </ul>
                <div class="mt-[21.5rem]">
                    <a href="#" class="flex items-center p-2 text-white bg-tosca rounded-lg  group ">
                       <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                       <span class="material-symbols-outlined">
                          logout
                       </span>
                    </a>
                </div>
            </div>
        </aside>
        </>
    )
}