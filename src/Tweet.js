import React from 'react';
import logo from "./logo.svg";

function Tweet() {
    return (
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p class="text-lg font-semibold">
                    “React is really interesting. Trying out UI with tailwind”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-cyan-600">
                    The learner
                </div>
                <div class="text-gray-500">
                    Everywhere, Earth
                </div>
                </figcaption>
            </div>
        </figure>
    );
}

export default Tweet;