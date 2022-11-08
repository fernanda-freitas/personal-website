import React from "react"

// ------- import project images -------
import Watchlist01 from "../assets/images/watchlist/01.png"

export default function watchlist() {
    return (
        <>
          <div className="w-10/12 mx-auto mb-28 mt-32">
            <h2 className="text-5xl font-rubik font-bold text-gray-700">Watch list</h2>
            <h2 className="max-w-5xl mt-3 text-lg md:text-5xl font-rubik leading-tight text-gray-600">Ui for a Rails app to create movie lists and append new movies to it. Based on CRUD actions it allows users to select movies and create bookmarks.</h2>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Backend</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Frontend</div>
                <div class="inline bg-purple-100 text-purple-600 antialiased rounded-full text-sm tracking-wide font-semibold px-3 py-1 whitespace-nowrap">Interface design</div>
              </div>
            </div>
          </div>
          <img className="w-100 h-auto object-contain mx-auto" src={Watchlist01} alt="Artsol ui screen" />
        </ >
    )
};
