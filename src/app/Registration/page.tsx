import Button from "@/Components/Button/Button";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Header/Navbar";
import React from "react";

const page = () => {
  return (
    <section className="pt-40">
      <Navbar />
      <div className="container pb-20">
        <div className="max-w-[48rem] m-auto text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold pb-4 leading-tight tracking-tight">
            Get started with Gray
          </h2>
          <p className="text-lg mb-8 text-[#71717A]">
            Talk to an expert about your requirements, needs, and timeline.
            Complete the form and we&apos;ll make sure to reach out.
          </p>
        </div>

        <div className="max-w-sm m-auto border p-6 rounded-md shadow-2xl">
          <form>
            <div className="flex flex-col gap-4">
              <div>
                <label className="pera !text-black mb-2 block" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  type="text"
                  placeholder="Patrick Rossi"
                />
              </div>
              <div>
                <label className="pera !text-black mb-2 block" htmlFor="email">
                  Work Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  type="email"
                  placeholder="mark@acmecorp.com"
                />
              </div>
              <div>
                <label
                  className="pera !text-black mb-2 block"
                  htmlFor="channel"
                >
                  How did you hear about us?
                </label>
                <select
                  id="channel"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                >
                  <option>Twitter</option>
                  <option>Medium</option>
                  <option>Telegram</option>
                </select>
              </div>
              <div>
                <label
                  className="pera !text-black mb-2 block"
                  htmlFor="message"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  placeholder="Share your requirements"
                ></textarea>
              </div>
            </div>
            <div className="mt-8">
              <Button text="Request Demo" />
            </div>
          </form>
        </div>
      </div>

      <div className="container grid md:grid-cols-3 gap-16 text-center px-20 pb-20">
        <div>
          <div className="border rounded-sm justify-center items-center w-8 h-8 inline-flex mb-3">
            <svg
              className="cqntz"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
            >
              <path d="M.72 16.053c-.5-.2-.8-.7-.7-1.2l4-14c.2-.6.7-.9 1.3-.8.5.2.8.7.7 1.3l-4 14c-.2.5-.7.8-1.3.7Zm13.3-.7-4-14c-.1-.6.2-1.1.7-1.3.5-.2 1.1.2 1.2.7l4 14c.2.5-.2 1.1-.7 1.2-.5.2-1-.1-1.2-.6Zm-7-11.3h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Personal</h3>
          <p className="pera">
            We can help you choose the right plan for your team.
          </p>
        </div>

        <div>
          <div className="border rounded-sm justify-center items-center w-8 h-8 inline-flex mb-3">
            <svg
              className="cqntz"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
            >
              <path d="M1 0a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1Zm4 5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1Zm4-2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Zm4 5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Metrics</h3>
          <p className="pera">
            We can help you choose the right plan for your team.
          </p>
        </div>

        <div>
          <div className="border rounded-sm justify-center items-center w-8 h-8 inline-flex mb-3">
            <svg
              className="cqntz"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
            >
              <path d="M.5 0h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 0Zm13 12h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-11-8h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm3 4h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Flexible</h3>
          <p className="pera">
            We can help you choose the right plan for your team.
          </p>
        </div>
      </div>

      <div className="bg-[#f4f4f5]">
        <div className="container py-20">
          <div className="text-center pb-12 max-w-3xl m-auto">
            <h2 className="text-3xl  font-bold pb-4 leading-tight tracking-tight">Join the Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border bg-white  rounded flex flex-col">
              <div className="flex items-center mb-3">
                <div className="flex rounded-full justify-center items-center mr-3 w-10 h-10 bg-black">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="16"
                  >
                    <path d="M18.624 1.326A18.784 18.784 0 0 0 14.146.001a.07.07 0 0 0-.072.033c-.193.328-.408.756-.558 1.092a17.544 17.544 0 0 0-5.03 0A10.86 10.86 0 0 0 7.922.034.072.072 0 0 0 7.849 0C6.277.26 4.774.711 3.37 1.326a.063.063 0 0 0-.03.024C.49 5.416-.292 9.382.091 13.298c.002.02.013.038.029.05a18.598 18.598 0 0 0 5.493 2.65.073.073 0 0 0 .077-.025c.423-.551.8-1.133 1.124-1.744.02-.036 0-.079-.038-.093a12.278 12.278 0 0 1-1.716-.78.066.066 0 0 1-.007-.112c.115-.082.23-.168.34-.255a.07.07 0 0 1 .072-.009c3.6 1.569 7.498 1.569 11.056 0a.07.07 0 0 1 .072.008c.11.087.226.174.342.256a.066.066 0 0 1-.006.112c-.548.305-1.118.564-1.717.78a.066.066 0 0 0-.038.093c.33.61.708 1.192 1.123 1.743a.072.072 0 0 0 .078.025 18.538 18.538 0 0 0 5.502-2.65.067.067 0 0 0 .028-.048c.459-4.528-.768-8.461-3.252-11.948a.055.055 0 0 0-.03-.025ZM7.352 10.914c-1.084 0-1.977-.95-1.977-2.116 0-1.166.875-2.116 1.977-2.116 1.11 0 1.994.958 1.977 2.116 0 1.166-.876 2.116-1.977 2.116Zm7.31 0c-1.084 0-1.977-.95-1.977-2.116 0-1.166.876-2.116 1.977-2.116 1.11 0 1.994.958 1.977 2.116 0 1.166-.867 2.116-1.977 2.116Z"></path>
                  </svg>
                </div>
                <h3 className="head">Discord</h3>
              </div>
              <p className="pera">
                Engage in real time conversations with us!
              </p>
              <div className="text-right">
                <a className="font-medium text-sm items-center inline-flex mt-4" href="#0">
                  Talk to us
                  <svg
                    className="fill-current flex-shrink-0 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 border bg-white   rounded flex flex-col">
              <div className="flex items-center mb-3">
                <div className="flex rounded-full justify-center items-center mr-3 w-10 h-10 bg-black">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                  >
                    <path d="M10.041 0C4.52 0 0 4.382 0 9.737c0 4.3 2.845 7.952 6.862 9.25.502.081.669-.243.669-.487v-1.622c-2.761.568-3.347-1.299-3.347-1.299-.419-1.136-1.088-1.46-1.088-1.46-1.004-.568 0-.568 0-.568 1.004.08 1.506.973 1.506.973.92 1.461 2.343 1.055 2.929.812.084-.65.335-1.055.67-1.298-2.26-.244-4.603-1.055-4.603-4.788 0-1.055.419-1.947 1.004-2.596 0-.325-.418-1.299.168-2.597 0 0 .836-.243 2.761.974.837-.244 1.673-.325 2.51-.325.837 0 1.674.081 2.51.325 1.925-1.298 2.762-.974 2.762-.974.586 1.38.167 2.353.084 2.597.669.649 1.004 1.541 1.004 2.596 0 3.733-2.343 4.544-4.603 4.788.335.324.67.892.67 1.785V18.5c0 .244.167.568.67.487 4.016-1.298 6.86-4.95 6.86-9.25C20.084 4.382 15.565 0 10.042 0Z"></path>
                  </svg>
                </div>
                <h3 className="head">GitHub</h3>
              </div>
              <p className="pera">
                Engage in real time conversations with us!
              </p>
              <div className="text-right">
                <a className="font-medium text-sm items-center inline-flex mt-4" href="#0">
                  Contribute
                  <svg
                    className="fill-current flex-shrink-0 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-4 border bg-white   rounded flex flex-col">
              <div className="flex items-center mb-3">
                <div className="flex rounded-full justify-center items-center mr-3 w-10 h-10 bg-black">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                  >
                    <path d="M8.096 10.409 3.117 16H.355l6.452-7.248L0 0h5.695L9.63 5.115 14.176 0h2.76L10.91 6.78 18 16h-5.555l-4.349-5.591Zm5.111 3.966h1.53L4.864 1.54h-1.64l9.984 12.836Z"></path>
                  </svg>
                </div>
                <h3 className="head">Twitter / X</h3>
              </div>
              <p className="pera">
                Engage in real time conversations with us!
              </p>
              <div className="text-right">
                <a className="font-medium text-sm items-center inline-flex mt-4" href="#0">
                  Follow us
                  <svg
                    className="fill-current flex-shrink-0 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                  >
                    <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
