import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Profile() {
    return (
        <>
        <Breadcrumb title="My Profile" page="My Profile" breadcrumbImage="img/Planche.jpg"/>

        <div className="bg-neutral-950">
            <div className="p-8 bg-neutral-900 shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-white text-2xl">22</p>
                            <p className="text-gray-400">Likes</p>
                        </div>
                        <div>
                            <p className="font-bold text-white text-2xl">10</p>
                            <p className="text-gray-400">Comments</p>
                        </div>
                        <div>
                            <p className="font-bold text-white text-2xl">89</p>
                            <p className="text-gray-400">Posts</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Edit
                        </button>
                        <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Change Image
                        </button>
                    </div>
                </div>
                <div className="mt-20 text-center border-b border-gray-800 pb-12">
                    <h1 className="text-6xl font-medium text-white">
                        Gosho Strombata
                    </h1>
                    <p className="font-light text-white mt-3 text-xl">Bucharest, Romania</p>
                </div>
                <div className="mt-12 text-center border-b border-gray-800 pb-12">
                    <p className="text-white text-lg font-light lg:px-16">
                        An artist of considerable range, Ryan — the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music, giving it a warm, intimate feel with a
                        solid groove structure. An artist of considerable range.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                        <h2 className="bg-zinc-800 text-white text-2xl p-4">Articles Written</h2>
                        <div className="py-8 px-8 bg-zinc-900 space-y-2">
                            <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                            <div className="space-y-2">
                                <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                    <li>Aug, 15, 2019</li>
                                    <li>20 Comments</li>
                                    <li>20 Likes</li>
                                </ul>
                                <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-800" />
                    </div>
                    <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                        <h2 className="bg-zinc-800 text-white text-2xl p-4">Recipes Written</h2>
                        <div className="py-8 px-8 bg-zinc-900 space-y-2">
                            <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                            <div className="space-y-2">
                                <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                    <li>Aug, 15, 2019</li>
                                    <li>20 Comments</li>
                                    <li>20 Likes</li>
                                </ul>
                                <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-800" />
                    </div>
                    <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                        <h2 className="bg-zinc-800 text-white text-2xl p-4">Liked Posts</h2>
                        <div className="py-8 px-8 bg-zinc-900 space-y-2">
                            <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                            <div className="space-y-2">
                                <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                    <li>Aug, 15, 2019</li>
                                    <li>20 Comments</li>
                                    <li>20 Likes</li>
                                </ul>
                                <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-800" />
                    </div>
                    <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                        <h2 className="bg-zinc-800 text-white text-2xl p-4">Commented Posts</h2>
                        <div className="py-8 px-8 bg-zinc-900 space-y-2">
                            <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                            <div className="space-y-2">
                                <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                    <li>Aug, 15, 2019</li>
                                    <li>20 Comments</li>
                                    <li>20 Likes</li>
                                </ul>
                                <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                <div className="flex justify-center">
                                    <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-800" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
