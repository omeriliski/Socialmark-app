<template>
    <div>
        <!-- ! HEADER -->
    <div class="bg-white border-gray-200 border-b-[1px] h-16 w-full flex items-center justify-center">
      <nav class="flex w-full px-2">
        <div class="flex text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-2" height="36" viewBox="0 0 24 24" width="36">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z" />
          </svg>
          SocialMark
        </div>
        <div class="hidden">
          <a class="mr-3 navbar-item" href="#">Home</a>
          <a class="mr-3 navbar-item" href="#">My Posts</a>
          <a class="navbar-item" href="#">Favorites</a>
        </div>

        <div class="ml-auto flex items-center">
          <button class="flex bg-gray-700 hover:bg-black text-white px-3 py-1 rounded-sm text-sm items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="16" viewBox="0 0 24 24" width="16">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            New
          </button>
          <div class="relative group">
            <button class="w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-500 hover:bg-gray-200 group-focus-within:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" class="fill-current" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            <nav class="bg-white !z-10 rounded-md shadow-md p-2 w-56 flex flex-col absolute group-focus-within:visible top-full right-0 invisible">
              <a href="#" class="mb-2 menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" class="fill-current mr-1" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                </svg>
                Account
              </a>
              <a href="#" class="mb-2 menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" />
                </svg>
                Favorites</a
              >
              <a href="#" class="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="fill-current mr-1" height="24" viewBox="0 0 24 24" width="24">
                  <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                  <g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g>
                </svg>
                Logout</a
              >
            </nav>
          </div>
        </div>
      </nav>
    </div>
    <!-- ! HEADER -->
    <div class="flex flex-row">

      <!--!Bookmark Items -->
      <div>
        <div class="p-2 grid grid-cols-8 gap-4">
          <div v-for="i in 10" :key="i" class="bg-white flex flex-col gap-x-3 rounded-md shadow-sm">
            <div class="p-3">
              <a href="#" class="hover:text-black font-bold text-l mb-1 text-gray-600 text-center">Vue3 Dokümantasyon</a>
              <div class="flex items-center justify-center mt-2 gap-x-1">
                <button class="flex-shrink-0 w-10 h-10 p-2 flex rounded-md hover:bg-indigo-300 group justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-white" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
                  </svg>
                </button>
                <button class="flex-shrink-0 w-10 h-10 p-2 flex rounded-md hover:bg-black group justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-white" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="24" height="24">
                    <rect fill="none" />
                    <path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z" />
                  </svg>
                </button>
                <div class="relative group">
                  <button class="!-z-[1] flex-shrink-0 w-10 h-10 p-2 flex rounded-md hover:bg-gray-200 group-focus-within:bg-gray-300 group justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current group-hover:text-gray-700" height="24" viewBox="0 0 24 24" width="24">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z" />
                    </svg>
                    <p class="absolute !z-10 w-60 h-40 group-focus-within:visible right-0 top-full overflow-y-scroll group-hover:visible bg-white invisible rounded-md shadow-lg p-3 text-left border-gray-300 border-[1px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique nemo consequatur a accusamus assumenda laborum consequuntur explicabo dolor, odit eligendi voluptate illum itaque accusantium, cumque tenetur cupiditate illo libero dolores!</p>
                  </button>
                </div>
              </div>
              <div class="text-xs text-gray-400 mt-2 flex justify-between">
                <a href="#" class="hover:text-black"> Gökhan Kandemir </a>
                <span>14 Mart</span>
              </div>
            </div>
            <div class="bg-red-200 p-1 text-red-900 text-center text-sm">Vue.js</div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>