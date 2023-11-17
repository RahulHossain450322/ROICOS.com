import { useState } from "react";

function News_letter() {
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-gray-100 for_blur">
      <div className="con_tainer">
        <div className="py-14 flex lg:items-center md:items-center lg:flex-row md:flex-row flex-col">
          {/* left div */}
          <div className="lg:pr-10 md:pr-10">
            <h3 className="hero_title text_yellow">
              Subscribe for free to our Newsletter
            </h3>
            <p className="mt-4">
              If what you need is to know how to <b>SELL MORE</b> , then this
              interests you!
            </p>
            <p className="mt-4">
              Be the first to receive all the latest news, sales strategies,
              tips and tricks to sell more on the main Marketplaces.
            </p>
          </div>
          {/* right div */}
          <div className=" lg:mt-0 md:mt-0 mt-10">
            <i>
              Calm down! We do not do SPAM and you can unsubscribe whenever you
              want.
            </i>
            <form onSubmit={submit} className="mt-5">
              <div className="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full border shadow-[rgba(0,_0,_0,_0.9)_0px_2px_10px_-5px] px-4 py-3 rounded-sm outline-none"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="flex items-center mt-3">
                <input type="checkbox" />
                <p className="ms-1">
                  I have read and accept the Privacy Policy
                </p>
              </div>
              <button
                type="submit"
                className="mt-6 border border_color px-3 py-2 rounded-full text_yellow hover:border-transparent
            hover:bg_yellow hover:text-white transition-all duration-200 ease-linear"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News_letter;
