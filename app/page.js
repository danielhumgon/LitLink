import Image from "next/image";

// Assets
import logo from "./assets/logo.png";
// import appstore from './assets/appstore.png'
import macstore from "./assets/macstore.png";
import phone1 from "./assets/phone1.jpeg";
import phone6 from "./assets/phone6.jpeg";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 p-6">
        <Image
          className="w-24 h-24 m-auto mt-4 p-4 border border-gray-300 rounded-2xl shadow-md"
          src={logo}
          alt="logo"
        />
        <h1 className="text-2xl text-center font-bold p-3 text-gray-900 sm:text-4xl sm:w-3/4 sm:m-auto">
          Your number one destination to all smartphone related info - be smart!
        </h1>
        <div className="sm:flex sm:w-2/3 sm:m-auto">
          <Image
            className="w-40 h-12 m-auto sm:w-48 sm:h-14"
            src={macstore}
            alt="app store logo"
          />
          <Image
            className="w-40 h-12 m-auto invisible sm:visible sm:w-48 sm:h-14"
            src={macstore}
            alt="mac store logo"
          />
        </div>
        
      </div>

      {/* Contents Section */}

      {/* Card 1 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <p className="text-lg">
          <span className="font-bold">Lorem</span>{" "}
          <span className="text-gray-500">
            ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur fuga repellat esse aliquid accusantium commodi facilis.
          </span>
        </p>
        <Image className="m-auto" src={phone1} alt="phone 1" />
      </div>

      {/* Card 2 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <p className="text-lg">
          <span className="font-bold">Lorem</span>{" "}
          <span className="text-gray-500">
            ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur fuga repellat esse aliquid accusantium commodi facilis.
          </span>
        </p>
        <Image className="m-auto" src={phone1} alt="phone 1" />
      </div>

      {/* Card 3 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <p className="text-lg">
          <span className="font-bold">Lorem</span>{" "}
          <span className="text-gray-500">
            ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur fuga repellat esse aliquid accusantium commodi facilis.
          </span>
        </p>
        <Image className="m-auto" src={phone1} alt="phone 1" />
      </div>

      {/* Card 4 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <p className="text-lg">
          <span className="font-bold">Lorem</span>{" "}
          <span className="text-gray-500">
            ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur fuga repellat esse aliquid accusantium commodi facilis.
          </span>
        </p>
        <Image className="m-auto" src={phone1} alt="phone 1" />
      </div>

      {/* Card 5 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <p className="text-lg">
          <span className="font-bold">Lorem</span>{" "}
          <span className="text-gray-500">
            ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consequatur fuga repellat esse aliquid accusantium commodi facilis.
          </span>
        </p>
        <Image className="m-auto" src={phone1} alt="phone 1" />
      </div>

      {/* Card 6 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12">
        <div className="text-lg">
          <h2 className="font-bold">Get on iPad and macOS</h2>
          <span className="text-gray-500">
            Available for all your devices. Never be disconnected in any of your
            devices.
          </span>
          <Image
            className="w-40 h-12 mt-4"
            src={macstore}
            alt="app store logo"
          />
          <Image
            className="w-40 h-12 mt-3"
            src={macstore}
            alt="mac store logo"
          />
        </div>
        <Image className="m-auto" src={phone6} alt="phone 6" />
      </div>

      {/* FAQ Section */}

      <div className="flex flex-col text-lg mb-8">
        {/* Question 1 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">Do you have any social networks?</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde
            itaque officia dicta quod, assumenda nulla, voluptatum in
            repellendus soluta.
          </p>
        </div>

        {/* Question 2 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">Do you have any social networks?</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde
            itaque officia dicta quod, assumenda nulla, voluptatum in
            repellendus soluta.
          </p>
        </div>

        {/* Question 3 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">Do you have any social networks?</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil unde
            itaque officia dicta quod, assumenda nulla, voluptatum in
            repellendus soluta.
          </p>
        </div>

        {/* Footer */}

        <footer className="text-center p-4">
          <p className="text-gray-400 text-xs">
            &copy; Copyright {new Date().getFullYear()} All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
