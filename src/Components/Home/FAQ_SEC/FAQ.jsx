import {} from "react";
import Faq_Helper from "./Helper/Faq_Helper";

function FAQ() {
  return (
    <section className="bg_yellow for_blur">
      <div className="con_tainer">
        <div className="py-20 ">
          <div className="flex justify-between lg:flex-row md:flex-row flex-col">
            {/* left div */}
            <div className="w-full lg:w-1/2 md:w-1/2 pr-5">
              <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold text-white">
                Frequently asked questions
              </h4>
              <h5 className="text-white text-lg mt-4">
                Do you have questions about how to Sell on Amazon? Check out the
                Most Frequently Asked Questions from our clients:
              </h5>
              <button
                className="mt-6 border border-white px-3 py-2 rounded-full text-white hover:border-transparent
            hover:bg-white hover:text-yellow-600 transition-all duration-200 ease-linear"
              >
                write to us!
              </button>
            </div>
            {/* right div*/}
            <div className="bg-white lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-10">
              {/* question_1 */}
              <Faq_Helper
                questions={
                  "WHAT SERVICES DOES A MARKETING AGENCY ON AMAZON OFFER?"
                }
                answers={
                  <div className="">
                    <p className="">
                      Roicos, the <b>certified Amazon Advertising agency</b>{" "}
                      offers Consulting services{" "}
                      <b>on Amazon , A+ Content , Brand Store , Amazon</b>
                      Sponsored Ads and audits of your account.
                    </p>
                    <p className="mt-3">
                      We are also experts in <b>catalog uploading</b> and we
                      have native speakers willing to carry out translations to
                      help you succeed internationally on Amazon.
                    </p>
                  </div>
                }
              />
              {/* question_2 */}
              <Faq_Helper
                questions={"MARKETING AGENCY VS ROICOS"}
                answers={
                  <div className="space-y-4">
                    <p className="">
                      At Roicos <b>we specialize in Amazon</b> as the reference
                      marketplace.
                    </p>
                    <p className="mt-3">
                      Marketing agencies prefer to offer more services such as
                      UX, and diversify their services by offering Google
                      campaigns, Facebook campaigns, Google positioning, and
                      many more activities that can provide speed and security
                      on your website.
                    </p>
                    <p>
                      But Roicos doesn't want to be your best marketing agency
                      in general, it wants to be the best{" "}
                      <b>marketing agency on Amazon .</b>
                    </p>
                    <p>
                      So the services that we offer entirely so far focus on
                      improving your <b>SEO on Amazon</b> , creating successful
                      campaigns for companies and brands focused on Amazon.
                    </p>
                    <p>
                      In this way, we give you our experience in this
                      marketplace with more than 7 years implemented in more
                      than 400 companies.
                    </p>
                  </div>
                }
              />
              {/* question_3 */}
              <Faq_Helper
                questions={"WHAT IS A SELLER ON AMAZON?"}
                answers={
                  <div className="space-y-4">
                    <p className="">
                      Being a Seller on Amazon means that your brand becomes{" "}
                      <b>a direct Amazon supplier .</b>
                    </p>
                    <p>
                      Do you want to be <b>a Vendor on Amazon</b> ? It is a
                      profitable option for your brand, a possibility to{" "}
                      <b>sell products on the platform.</b>
                      This option can only be accessed by invitation , since it
                      is Amazon who decides to contact your brand so that it can
                      become a Vendor.
                    </p>
                    <p>
                      This option can only be <b>accessed by invitation</b> ,
                      since it is Amazon who decides to contact your brand so
                      that it can become a Vendor.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
