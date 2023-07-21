import Image from "next/image";

// Assets
import logo from "./assets/logo.svg";
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
        <h1 className="text-2xl text-center font-bold p-3 text-gray-800 sm:text-4xl sm:w-3/4 sm:m-auto lg:w-1/2 lg:text-3xl">
          Access a vast and diverse collection of e-books and audiobooks, from
          classic literature to contemporary bestsellers.
        </h1>
        <div className="sm:flex sm:w-2/3 sm:m-auto sm:mb-8 lg:w-1/2">
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
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="sm:flex flex-row-reverse">
          <p className="text-lg sm:self-center sm:text-xl lg:w-2/4 lg:text-2xl">
            <span className="font-bold">Library</span>{" "}
            <span className="text-gray-500">
              offers an ever-expanding repository of reading materials to
              satisfy every reader&#39;s taste.
            </span>
          </p>
          <Image className="m-auto sm:w-80 lg:w-9/12" src={phone1} alt="phone 1" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="sm:flex">
          <p className="text-lg sm:self-center sm:text-xl lg:w-2/4 lg:text-2xl">
            <span className="font-bold">Circles</span>{" "}
            <span className="text-gray-500">
              allows to share your thoughts, insights, and favorite passages
              with fellow readers, fostering engaging discussions and promoting
              a sense of community around your favorite books.
            </span>
          </p>
          <Image className="m-auto sm:w-80 lg:w-9/12" src={phone1} alt="phone 1" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="sm:flex flex-row-reverse">
          <p className="text-lg sm:self-center sm:text-xl lg:w-2/4 lg:text-2xl">
            <span className="font-bold">Recommendations</span>{" "}
            <span className="text-gray-500">
              analyzes your reading preferences and browsing history to offer
              personalized book suggestions. Discover new authors, genres, and
              hidden literary gems tailored to your unique tastes.
            </span>
          </p>
          <Image className="m-auto sm:w-80 lg:w-9/12" src={phone1} alt="phone 1" />
        </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="sm:flex">
          <p className="text-lg sm:self-center sm:text-xl lg:w-2/4 lg:text-2xl">
            <span className="font-bold">Journal.</span>{" "}
            <span className="text-gray-500">
              Jot down notes, highlight passages, and bookmark your favorite
              moments as you progress through each book. This feature helps you
              capture your reflections and create a digital reading diary.
            </span>
          </p>
          <Image className="m-auto sm:w-80 lg:w-9/12" src={phone1} alt="phone 1" />
        </div>
      </div>
      {/* Card 5 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="sm:flex flex-row-reverse">
          <p className="text-lg sm:self-center sm:text-xl lg:w-2/4 lg:text-2xl">
            <span className="font-bold">Club</span>{" "}
            <span className="text-gray-500">
              sessions with fellow readers from around the world. Experience
              live discussions, author Q&A sessions, and exclusive book-related
              events, all within the LitLink&trade; Book Club feature.
            </span>
          </p>
          <Image className="m-auto sm:w-80 lg:w-9/12" src={phone1} alt="phone 1" />
        </div>
      </div>
      {/* Card 6 */}
      <div className="flex flex-col border border-gray-200 rounded-2xl shadow-md m-auto w-11/12 p-8 mb-12 sm:w-3/4">
        <div className="text-lg sm:text-xl">
          <h2 className="font-bold">Get on iPad and macOS</h2>
          <span className="text-gray-500">
            Available for all your devices. Never be disconnected in any of your
            devices.
          </span>
          <div className="flex gap-3">
            <Image
              className="w-40 h-12 mt-4"
              src={macstore}
              alt="app store logo"
            />
            <Image
              className="w-40 h-12 mt-4"
              src={macstore}
              alt="mac store logo"
            />
          </div>
        </div>
        <Image className="m-auto lg:w-1/2" src={phone6} alt="phone 6" />
      </div>

      {/* FAQ Section */}

      <div className="flex flex-col text-lg mb-8 sm:p-7 lg:p-20">
        {/* Question 1 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">
            How do I join a Reading Circle on LitLink&trade;?
          </h2>
          <p className="text-gray-700">
            Joining a Reading Circle on LitLink&trade; is simple! Just go to the
            &#34;Reading Circles&#34; section in the app&#39;s main menu. Browse
            the list of available Reading Circles or use the search feature to
            find one that interests you. Click on the Reading Circle you want to
            join. Tap the &#34;Join&#34; button to become a member of the
            circle.
          </p>
        </div>

        {/* Question 2 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">
            Can I access LitLink&#39;s&trade; library offline?
          </h2>
          <p className="text-gray-700">
            Yes, you can access LitLink&#39;s&trade; library offline!
            LitLink&trade; allows you to download your favorite books to your
            device, so you can enjoy reading even when you&#39;re not connected
            to the internet. Simply tap the download icon next to the book you
            wish to read, and it will be available in your offline library for
            you to access anytime, anywhere.
          </p>
        </div>

        {/* Question 3 */}
        <div className="p-5">
          <h2 className="font-bold mb-3">
            How does LitLink&#39;s&trade; personalized recommendation system
            work?
          </h2>
          <p className="text-gray-700">
            LitLink&#39;s&trade; personalized recommendation system utilizes
            advanced algorithms and machine learning to understand your reading
            preferences. It takes into account factors such as the genres
            you&#39;ve enjoyed, the books you&#39;ve read, and your interactions
            within the app. Based on this data, LitLink&trade; suggests books
            that align with your interests, introducing you to new authors and
            titles you&#39;re likely to love. The more you use LitLink&trade;,
            the better the recommendations become, tailoring your reading
            experience to suit your unique tastes.
          </p>
        </div>

        {/* Footer */}

        <footer className="text-center p-4">
          <p className="text-gray-400 text-xs">
            &copy; Copyright {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
